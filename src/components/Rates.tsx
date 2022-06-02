import React, { useState } from 'react'
import { ReactComponent as StarSVG } from '../assets/icon-star.svg';

export const Rates = ( { setRate }: any ) => {
    const rates = [1,2,3,4,5];
    const [rateSelected, setRateSelected] = useState(-1);

    return (
        <>
            <div className='container-star-icon'>
                <StarSVG />
            </div>
            
            <span className='title-rating'> How did we do? </span>

            <span className='description-rating'> Please let us know how we did with your support request. All the feedback os appreciated to help us improve our offering! </span>
        
            <div className='container-rates'>
                {rates.map((rate: number, idx: number) => (
                    <div key={idx} className={`container-rate ${rateSelected === rate && 'selected'}`} 
                        onClick={() => setRateSelected(rate) }>
                        <span className='rate'>{rate}</span>
                    </div>
                ))}
            </div>

            <button className='submit-rate' onClick={() => setRate(rateSelected)}> Submit </button>
        </>
    )
}
