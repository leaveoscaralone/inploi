import React, { useState } from 'react';
import {
    AccordionWrapper,
    AccordionHeader,
    AccordionInfo,
    HeaderText,
    StyledButton,
    Descritpion,
    FlexDiv,
    Country,
    ApplyBtn,
} from '../styles/HitComponentStyles';

export type HitProps = {
    hit: {
        id: number;
        company_name: string;
        description: string;
        country: string;
        [key: string]: any;
    }
    handleJobClick: (hit: any) => void;
}


export const HitComponent: React.FC<HitProps> = ({ hit, handleJobClick }) => {
    const [isActive, toggleActive] = useState<boolean>(false)
    const handleClick = () => {
        handleJobClick(hit)
        toggleActive(!isActive)
    }

    return (
        <AccordionWrapper>
            <AccordionHeader className='jobs' onClick={handleClick} >
                <HeaderText>{hit.company_name}</HeaderText>
                <StyledButton>{isActive ? '-' : '+'}</StyledButton>
            </AccordionHeader>
            <AccordionInfo id={hit.id} className='descriptions'>
                <Descritpion>{hit.description}</Descritpion>
                <FlexDiv>
                    <Country>{hit.country}</Country>
                    <ApplyBtn>Apply Now</ApplyBtn>
                </FlexDiv>
            </AccordionInfo>
        </AccordionWrapper>
    )
}

