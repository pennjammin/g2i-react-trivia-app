import React from 'react';

import Container from '../../Container';

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
    );
 
    if (isLoading) return (
        <Container>
            Loading...
        </Container>
    );
 
    if (error) return 'An error has occurred: ' + error.message;
 
    return (
      <Container>
        <h1 className='text-3xl font-bold m-10'>{data.results[0].category}</h1>
        <div>{data.results[0].question}</div>
        <div class="inline-flex space-x-8">
          <button class="bg-black hover:bg-gray-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4">
            True
          </button>
          <button class="bg-black hover:bg-gray-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4 ">
            False
          </button>
        </div>
        <div>{0 + 1} of 10</div>
      </Container>
    );
 
  }