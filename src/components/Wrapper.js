import React from 'react';

export default function Container({children}) {
    return (
        <div className='text-center min-h-screen flex-initial flex-col space-y-32'>
            {children}
        </div>
    );
}