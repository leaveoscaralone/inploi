import { useCallback, useState } from 'react'
import algoliaClient from 'algoliasearch';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectResults, updateState } from '../redux/resultsSlice';


const algolia = algoliaClient(
    'RY8KA2GJPX',
    '13e751a21f2ae69d7ccb7b590a0a9b3a'
).initIndex('development_jobs_index');


const search = (query: string, params = {}) =>
    algolia.search(query, {
        hitsPerPage: 20,
        ...params
    })

const Search = () => {

    const results = useSelector(selectResults)
    const [query, setQuery] = useState<string>('')
    const [clicked, toggleClicked] = useState<boolean>(false)
    const router = useRouter();
    const dispatch = useDispatch();

    const updateResults = useCallback(
        debounce(currentQuery => {
            search(currentQuery).then(({hits}) => {
                dispatch(updateState(hits))
            })
        }, 250),
        []
    )

    const handleChange = useCallback(
        e => {
            setQuery(e.target.value)
            if (e.target.value.length) updateResults(e.target.value)
        },
        [updateResults]
    )
    
    const handleClick = useCallback(
        e => {
            e.preventDefault()
            toggleClicked(!clicked)
            router.push('/results')
        },
        [clicked]
    )

    return (
        <div>
            <input type='search' onChange={handleChange} />
            <button onClick={handleClick} >submit</button>
        </div>
    )
}

export default Search;