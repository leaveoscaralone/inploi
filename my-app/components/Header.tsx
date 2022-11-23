import Image from 'next/image'
import styled from 'styled-components';


const HeaderContainer = styled.div`
    display: flex;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    overflow-x: hidden;
`

export const Header = () => {

    return (
        <HeaderContainer>
            <Image src='/Paradigmo_Logo.png' alt='logo' width='64' height='64'/>
            <button>Login</button>
        </HeaderContainer>
    )
}