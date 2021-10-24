import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerItem( { questionText, isCorrect } ) {
    return (
        <div className='m-6'>
            <p>{ isCorrect ? '+' : '-' } { questionText }</p>
        </div>
    );
}

AnswerItem.propTypes = {
    questionText: PropTypes.string,
    isCorrect: PropTypes.bool
}

AnswerItem.defaultProps = {
    questionText: '',
    isCorrect: false,
}