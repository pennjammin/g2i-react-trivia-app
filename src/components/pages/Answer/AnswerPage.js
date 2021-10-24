import React, { useState } from 'react';
import { queryClient } from '../Quiz/QuizPage';
import he from 'he';

import AnswerItem from './AnswerItem';

//Answer page where we snag the cached query
export default function AnswerPage() {
    const data = queryClient.getQueryData("quizData");
    let questions = [];
    //let correct = ;

    if(data){
        for (const [key, value] of Object.entries(data?.results)) {
            questions.push(value.question)
        }
    }

    return (
        <div className='text-center'>
            <div className='text-4xl'>
                You Scored
            </div>
            {questions.map(item => {
                return (<
                    AnswerItem
                    questionText={he.decode(item)}
                />)
            })}
            <div className='text-3xl font-bold'>
            </div>
        </div>
    );
}