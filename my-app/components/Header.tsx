import Image from 'next/image'
import { useRouter } from 'next/router';
import { FcGlobe } from 'react-icons/fc';
import {
    HeaderContainer,
    FlexCol,
    CenteredP,
    LoginBtn,
    JobTitle,
} from '../styles/HeaderStyles';

type HeaderProps = {
    jobPage?: boolean;
    login?: boolean;
}


const JobOpenings: React.FC = () => {
    return (
        <FlexCol>
            <JobTitle>Job Openings <FcGlobe/></JobTitle>
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