import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import QuizPage from '../components/pages/Quiz/QuizPage.js';

test('Render and start QuizPage', () => {
    render(
        <Router>
            <QuizPage />
        </Router>
    );
} );