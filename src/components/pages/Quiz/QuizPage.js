import React from 'react';

//react-query for the win
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient()

//This is where the quiz shall be
export default function QuizPage() {
    return (
        <QueryClientProvider client={queryClient}>

            <QuizQuery />

        </QueryClientProvider>
    );
}

function QuizQuery() {

    const { isLoading, error, data } = useQuery('quizData', () =>
 
      fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean').then(res =>
 
        res.json()
 
      )
    )
 
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message
 
    return (
      <div>
        <h1>{data.response_code}</h1>
      </div>
    )
 
  }