import { useCallback, useEffect, useState } from 'react';
import algoliaClient from 'algoliasearch';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { updateState } from '../redux/resultsSlice';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';



const algolia = algoliaClient(
    'RY8KA2GJPX',
    '13e751a21f2ae69d7ccb7b590a0a9b3a'
).initIndex('development_jobs_index');


const search = (query: string, params = {}) =>
    algolia.search(query, {
        hitsPerPage: 20,
        ...params
    })

const Wrapper = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 0, 95px auto;
`;

const SearchBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 50px;
    background: aliceblue;
    outline: none;
    border: none;
    border-radius: 28px;
    padding: 0 55px 0 25px;
    font-size: 15px;
    &:focus {
        outline: 1.5px solid #65bc66;
    }
`;

const Submit = styled.button`
    cursor: pointer;
    width: 55px;
    height: 45px;
    margin-left: -55px;
    background: none;
    border: none;
    outline: none;
`

const Search = () => {

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
        (e: any) => {
            setQuery(e.target.value)
            if (e.target.value.length) updateResults(e.target.value)
        },
        [updateResults]
    )
    
    const handleClick = useCallback(
        (e: any) => {
            e.preventDefault()
            toggleClicked(!clicked)
            router.push('/results')
        },
        [clicked]
    );

    useEffect(() => {
        const keyDownHandler = (e: any) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                router.push('/results');
            }
        }
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        }
    }, [])

    return (
        <Wrapper>
        <SearchBar>
            <SearchInput type='search' value={query} onChange={handleChange} />
            <Submit type='submit' onClick={handleClick}>
            {<AiOutlineSearch/>}
            </Submit>
        </SearchBar>
        </Wrapper>
    )
}

export default Search;