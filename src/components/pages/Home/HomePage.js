import React from 'react';

import HomeButton from './HomeButton';
import Wrapper from '../../Wrapper'

//Home page, went with tailwind for now
//is it as good as styled components?
export default function HomePage() {
    return (
        <Wrapper>
            <div className='text-4xl font-bold m-10'>
                <p>Welcome to the Trivia Challenge!</p>
            </div>
            <div className='text-xl'>
                <p>You will be presented with 10 true or false questions.</p>
            </div>
            <div className='text-xl'>
                <p>Can you score 100%?</p>
            </div>
            <HomeButton />
        </Wrapper>
    );
}