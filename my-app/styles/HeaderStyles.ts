import styled from 'styled-components';
import { Title } from './sharedStyles';

type HeaderContainerProps = {
    transparent: boolean;
};

export const HeaderContainer = styled.div<HeaderContainerProps>`
    background: ${props => props.transparent ? 'transparent' : 'aliceblue'};
    display: flex;
    position: sticky;
    top: 0;
    padding-top: 2%;
    padding-bottom: 1%;
    padding-left: 15%;
    padding-right: 15%;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    overflow-x: hidden;
    border-bottom: ${props => props.transparent ? null : '2px solid #65bc66'};
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CenteredP = styled.p`
    text-align: center;
`;

export const LoginBtn = styled.button`
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
`;

export const JobTitle = styled(Title)`
    color: #65bc66;
`;