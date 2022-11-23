import Image from 'next/image'
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Title } from '../styles/sharedStyles';

type HeaderProps = {
    jobPage?: boolean;
    login?: boolean;
}

const HeaderContainer = styled.div`
    background: ${props => props.transparent ? 'transparent' : 'aliceblue'};
    display: flex;
    position: sticky;
    top: 0;
    padding-top: 4%;
    padding-left: 15%;
    padding-right: 15%;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    overflow-x: hidden;
    border-bottom: ${props => props.transparent ? null : '2px solid #65bc66'};
`
const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
`
const CenteredP = styled.p`
    text-align: center;
`
const LoginBtn = styled.button`
    background-color: #65bc66;
    border: 1px solid transparent;
    border-radius: 20px;
    cursor: pointer;
    height: 30px;
    width: 60px;
    color: white;

    &:hover {
        background-color: white;
        color: #65bc66;
        border: 1px solid #65bc66;
    }
`
const JobTitle = styled(Title)`
    color: #65bc66;
`

const JobOpenings: React.FC = () => {
    return (
        <FlexCol>
        <JobTitle>Job Openings</JobTitle>
        <CenteredP>Here are the results of your search</CenteredP>
        </FlexCol>
    )
}

export const Header: React.FC<HeaderProps> = ({ jobPage, login }) => {
    const router = useRouter();

    return (
        <HeaderContainer transparent={!jobPage}>
            <Image src='/Paradigmo_Logo.png' alt='logo' width='64' height='64'/>
            {jobPage && <JobOpenings />}
            {login ? <LoginBtn>Login</LoginBtn> : <LoginBtn onClick={() => router.push('/')} >Back</LoginBtn>}
        </HeaderContainer>
    )
}