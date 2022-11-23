import { useSelector } from 'react-redux';
import { selectResults } from '../redux/resultsSlice';
import { HitComponent } from '../components/HitComponent';


const results = () => {
    const results = useSelector(selectResults);
    return (
        <>
        {results.map(hit => <HitComponent hit={hit} />)}
        </>
    )
}

export default results;