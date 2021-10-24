import React from 'react';
import { Link } from 'react-router-dom';

import Conatiner from '../../Container';

//Home page button
export default function HomePage() {
    return (
        <Conatiner>
            <Link 
                to='quiz'
                className="bg-grey hover:bg-gray-300 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4">
                    BEGIN
            </Link>
        </Conatiner>

    );
}