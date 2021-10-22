import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import AnswerPage from '../components/pages/AnswerPage';

test('Render and start AnswerPage', () => {
    render(
        <Router>
            <AnswerPage />
        </Router>
    );
} );