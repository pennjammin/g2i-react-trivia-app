import React, { useState } from 'react';
import he from 'he';
import { useHistory } from 'react-router-dom';

import Container from '../../Container';

//react-query will be used to async fetch the data
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false
    },
  },
})

//This is where the quiz shall be
export default function QuizPage() {
    return (
        <QueryClientProvider client={queryClient}>

            <QuizQuery />

        </QueryClientProvider>
    );
}

function QuizQuery() {

  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);//correct for falisty as the latter logic, adding one in history hook


  let history = useHistory();

  const { isLoading, error, data } = useQuery('quizData', () =>

    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean').then(res =>

      (res.json())

    )
  );

  if (isLoading) return (
      <Container>
          <p className='my-10 font-bold text-5xl'>Loading...</p>
      </Container>
  );

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Container>
      <h1 className='text-3xl font-bold m-10'>{data.results[count].category}</h1>
      <div className='outline-black p-10'>{he.decode(data.results[count].question)}</div>
      <div className="inline-flex space-x-8">
      <button 
          className="bg-black hover:bg-gray-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4"
          onClick = {()=> {
            if(data.results[count].correct_answer === 'True'){
              setCorrect(correct + 1);
            }
            setCount(count + 1);

            if(count === data.results.length - 1){
              history.push( {
                pathname: '/answer',
                state: { correctAnswers: correct + 1}
              } )
            }
        }}>
          True
      </button>
      <button 
          className="bg-black hover:bg-gray-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4 "
          onClick = {()=> {
            if(data.results[count].correct_answer === 'False'){
              setCorrect(correct + 1);
            }
            setCount(count + 1);

            if(count === data.results.length - 1){
              history.push( {
                pathname: '/answer',
                state: { correctAnswers: correct }
              } )
            }
        }}>
          False
      </button>
      </div>
      <div>{count + 1} of 10</div>
    </Container>
  );

}