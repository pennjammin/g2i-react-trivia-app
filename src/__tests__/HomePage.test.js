import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from '../components/pages/HomePage';

test('Render and start', () => {
    render(
        <Router>
            <HomePage />
        </Router>
    );
} );
