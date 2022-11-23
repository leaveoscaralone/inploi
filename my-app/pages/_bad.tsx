import algoliasearch from "algoliasearch";
import { useState, ChangeEvent, ChangeEventHandler } from 'react'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { useInstantSearch } from "react-instantsearch-hooks-web";
import { HitComponent } from '../components/HitComponent'
import { useRouter } from "next/router";

const searchClient = algoliasearch(
    'RY8KA2GJPX',
    '13e751a21f2ae69d7ccb7b590a0a9b3a'
);

export const SearchAlgolia = () => {

    const [searchInput, setSearchInput] = useState<string>('')
    const router = useRouter();
    const handleChange = (e: ChangeEvent) => {
        const searchInput = e.target.value
        console.log(`Searching ${searchInput}`)
        setSearchInput(searchInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push('/results')
    }

    return (
    <InstantSearch indexName='development_jobs_index' searchClient={searchClient}>
        <SearchBox searchAsYouType={false} onSubmit={(e) => handleSubmit(e)}/>
    </InstantSearch>
    )
}
