import React, { useEffect, useState } from 'react'
import { PreviewRates } from '../components/PreviewRates';
import { Rates } from '../components/Rates';

export const Rating = () => {
    const [rate, setRate] = useState(-1);
    /*
    <div className='container-rating'>
            { rate === -1 && <Rates setRate={setRate} />}
            { rate !== -1 && <PreviewRates rate={rate} />}
        </div>
         */
    return (
        <div className={`card ${rate !== -1 && 'submitted'}`}>
            <div className="content">
                <div className="front">
                    <Rates setRate={setRate} />
                </div>
                <div className="back">
                    <PreviewRates rate={rate} setRate={setRate} />
                </div>
            </div>
        </div>
    )
}
