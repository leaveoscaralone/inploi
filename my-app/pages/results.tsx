import { useSelector } from 'react-redux';
import { selectResults } from '../redux/resultsSlice';
import { HitComponent } from '../components/HitComponent';
import { HitProps } from '../components/HitComponent';
import styled from 'styled-components';
import { Header } from '../components/Header';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1%;
    margin-bottom: 5%;
    margin-left: 30%;
    margin-right: 30%;
    min-height: 100vh;
`

const results = () => {
    const results = useSelector(selectResults);
    const handleClick = (hit: HitProps['hit']) => {
        const descriptions = Array.from(document.querySelectorAll('.descriptions'))
        const jobs = Array.from(document.querySelectorAll('.jobs'))
        descriptions.forEach((desc: any, idx: number) => {
            const job = jobs[idx].querySelector('h3')
            const descVisibility = desc.style.maxHeight;
            const isJobSelected = parseInt(desc.id) === hit.id;

                if (!!descVisibility || !isJobSelected) {
                    desc.style.maxHeight = null;
                    job.style.fontWeight = '500';
                    job.style.color = null;
                } else {
                    desc.style.maxHeight = desc.scrollHeight + 'px';
                    job.style.fontWeight = '700';
                    job.style.color = '#65bc66';
                }
        })
        }

    return (
        <>
        <Header jobPage />
        <Wrapper>
            {results.length ? results.map((hit, idx) => <HitComponent key={idx} hit={hit} handleJobClick={handleClick} />) : <p>No results</p>}
        </Wrapper>
        </>
    )
}

export default results;