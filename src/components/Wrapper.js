import React from 'react';

export default function Container({children}) {
    return (
        <secction className='text-center min-h-screen flex-initial flex-col space-y-32'>
            {children}
        </secction>
    );
}