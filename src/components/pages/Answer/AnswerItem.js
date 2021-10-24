import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerItem( { questionText, isCorrect } ) {
    return (
        <div data-testid="scorecard__item">
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