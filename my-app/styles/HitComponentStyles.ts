import styled from 'styled-components';


export const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    border: 1px solid transparent;
    border-radius: 10px;
    background: #f2f2f2;
    box-shadow: 8px 8px 20px;
    &:hover {
        scale: 1.02;
        box-shadow: 8px 8px 20px #00ff80;
    }
`;

export const AccordionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    &:hover {
        color: #00ff80;
    }
`;

export const HeaderText = styled.h3`
    margin-left: 10px;
    font-weight: 500;
`;

export const AccordionInfo = styled.div`
    margin: 8px, 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height ease-out 0.4s;
`;

export const StyledButton = styled.button`
    color: #909090;
    background-color: transparent;
    font-weight: bold;
    outline: none;
    border: 0;
    cursor: pointer;
    font-size: 22px;
    transition: all 0.3s ease-in-out;
    margin: 0 15px;
    width: 25px;

    &:hover {
        color: #00ff80;
    }

    &:focus {
        outline: none;
    }
`;

export const Descritpion = styled.p`
    color: grey;
    padding: 0 20px;
`;

export const Country = styled.p`
    color: black;
`;

export const ApplyBtn = styled.button`
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 12px;
    height: 25px;
    cursor: pointer;
    color: black;
    &:hover {
        background-color: #00ff80;
        color: white;
        border: 1px solid transparent;
    }
`;

export const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 15px;
`;