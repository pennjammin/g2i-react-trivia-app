import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from '../components/pages/Home/HomePage.js';

test('Render and start HomePage', () => {
    render(
        <Router>
            <HomePage />
        </Router>
    );
} );
