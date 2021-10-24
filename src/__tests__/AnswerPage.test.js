import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import AnswerPage from '../components/pages/Answer/AnswerPage.js';

test('Render and start AnswerPage', () => {
    render(
        <Router>
            <AnswerPage />
        </Router>
    );
} );