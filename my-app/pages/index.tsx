import { Header } from '../components/Header'
import Search from './search'
import { Container } from '../styles/sharedStyles';
import styled from 'styled-components';


const Section = styled.section`
  display: flex;
  padding-top: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  white-space: pre-wrap;
  `
const text = 'Find a job you love \n with Paradigmo'

export default function Home() {
  return (
    <Container>
      <Header />
      <Section>
        <Title>{text}</Title>
        <Search/>
      </Section>
    </Container>

  )
}
