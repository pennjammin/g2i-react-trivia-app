import React from 'react';

import HomeButton from './HomeButton.js';

//Home page, went with tailwind for now
//is it as good as styled components?
export default function HomePage() {
    return (
        <div className='text-center'>
            <div className='text-lg font-bold'>
                <p>Welcome to the Trivia Challenge!</p>
            </div>
            <div>
                <p>You will be presented with 10 true or false questions.</p>
            </div>
            <div>
                <p>Can you score 100%?</p>
            </div>
            <HomeButton></HomeButton>
        </div>
    );
}