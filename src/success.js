import React from 'react';
import iconList from './assets/images/icon-list.svg'
import { useParams } from 'react-router-dom';

export default function Success() {

    const { email } = useParams();
    return (
        <div className='success-card'>
            <div className='success-message'>
                <img className='tickmark-image' src={iconList} alt='a Tick Mark'/>
        
                <div className='heading'>
                    Thanks for subscribing!
                </div>
        
                <div className='success-details'>
                    A confirmation mail has been sent to <b>{email}</b>. Please open it and click to button inside to confirm your subscription.
                </div>
            </div>

            <div className='lower-div'>
                <button className='dissmiss-button'> Dismiss message </button> 
            </div>

        </div>
    )
}