import { Header } from '../components/Header'
import Search from './search'
import { Container } from '../styles/sharedStyles';
import styled from 'styled-components';
import { Title } from '../styles/sharedStyles';
import { FcLike } from 'react-icons/fc';


const Section = styled.section`
  display: flex;
  padding-top: 7%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
`

export default function Home() {
  return (
    <Container>
      <Header login />
      <Section>
        <Title>Find a job you love <FcLike/> <br/> with Paradigmo</Title>
        <Search/>
      </Section>
    </Container>

  )
}
