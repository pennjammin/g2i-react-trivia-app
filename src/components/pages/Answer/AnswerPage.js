import React from 'react';
import { queryClient } from '../Quiz/QuizPage';
import he from 'he';

import AnswerItem from './AnswerItem';

//Answer page where we snag the cached query
export default function AnswerPage() {
    const data = queryClient.getQueryData("quizData");
    let questions = [];
    let answers = [];
    let correct = 0;

    if(data){
        for (const [key, value] of Object.entries(data?.results)) {
            questions.push(value.question)
            answers.push(value.correct_answer.toLowerCase());
            if(value.correct_answer == 'True') correct++;
        }
    }

    return (
        <div className='text-center'>
            <div className='text-4xl my-6'>
                You Scored
            </div>
            <div className='text-2xl font-bold'>
                {correct}/10
            </div>
            {questions.map((item, index) => {
                let checkAnswer = 'true' === answers[ index ];

                return (<
                    AnswerItem
                    isCorrect={checkAnswer}
                    questionText={he.decode(item)}
                />)
            })}
        </div>
    );
}