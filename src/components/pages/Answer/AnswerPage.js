import React, { useState } from 'react';
import { queryClient } from '../Quiz/QuizPage';

import Container from '../../Container';

//Answer page
export default function AnswerPage() {
    const data = queryClient.getQueryData("quizData");


    return (
        <Container>
            <p className='text-4xl'>
                You Scored
                {data?.results[0].correct_answer}
            </p>
        </Container>
    );
}