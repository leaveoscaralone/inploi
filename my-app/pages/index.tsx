import { Header } from '../components/Header'
import Search from './search'
import { Container } from '../styles/sharedStyles';
import styled from 'styled-components';
import { Title } from '../styles/sharedStyles';


const Section = styled.section`
  display: flex;
  padding-top: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const text = 'Find a job you love \n with Paradigmo'

export default function Home() {
  return (
    <Container>
      <Header login />
      <Section>
        <Title>{text}</Title>
        <Search/>
      </Section>
    </Container>

  )
}
