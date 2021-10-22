import React from 'react';

export default function Wrapper({children}) {
    return (
        <section className='text-center min-h-screen flex-initial flex-col space-y-32'>
            {children}
        </section>
    );
}