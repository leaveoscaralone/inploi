import React from 'react';
import {Hits} from 'react-instantsearch-dom'
import { useInstantSearch } from 'react-instantsearch-hooks-web'

type HitProps = {
    hit: any;
}

export const HitComponent: React.FC<HitProps> = ({ hit }) => {
    
    return (
        <>
            <div>
                <h3>{hit.company_name}</h3>
            </div>
            <div>
                <p>{hit.description}</p>
            </div>
            <aside>
                <p>{hit.country}</p>
                <button>Apply Now</button>
            </aside>
        </>
    )
}

