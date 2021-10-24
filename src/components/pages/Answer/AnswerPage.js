import React from 'react';
import { useLocation } from "react-router-dom";
import he from 'he';

import { queryClient } from '../Quiz/QuizPage';
import AnswerItem from './AnswerItem';
import AgainButton from './AgainButton';

//Answer page where we snag the cached query
export default function AnswerPage() {
    const data = queryClient.getQueryData("quizData");

    const location = useLocation();

    let questions = [];
    let answers = [];

    if(data){
        for (const [, value] of Object.entries(data?.results)) {
            questions.push(value.question)
            answers.push(value.correct_answer.toLowerCase());
        }
    }

    return (
        <div className='text-center'>
            <h1 className='text-4xl my-3'>
                You Scored
            </h1>
            <h2 className='text-2xl font-bold my-6'>
                {location.state?.correctAnswers}/10
            </h2>
            <ul>
                {questions.map((item, index) => {
                    let checkAnswer = 'true' === answers[ index ];

                    return (<
                        AnswerItem
                        isCorrect={checkAnswer}
                        questionText={he.decode(item)}
                        key={index}
                    />)
                })}
            </ul>
            <AgainButton />
        </div>
    );
}