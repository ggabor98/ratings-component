import React from 'react'
import { ReactComponent as IllustrationSVG } from '../assets/illustration-thank-you.svg';

export const PreviewRates = ( { rate, setRate }: any) => {

    return (
        <div className='container-preview-rating'>
            <IllustrationSVG />

            <span className='container-result'> You selected {rate} out of 5 </span>

            <div className='container-text-information'>
                <span className='title-rating'> Thank you! </span>
                <div>
                    <span className='description-rating'> We appreciate you taking the time to give a rating. </span>
                    <span className='description-rating'> If you ever need more support, don't hesitate to get in touch! </span>
                </div>
            </div>

            <button className='submit-rate rate-again-action' onClick={() => setRate(-1)}> Rate Again </button>
        </div>
    )
}
