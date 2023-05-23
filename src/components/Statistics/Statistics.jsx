import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul className={css.statistics}>
        <li className="statisticsItem">Good: {good}</li>
        <li className="statisticsItem">Neutral: {neutral}</li>
        <li className="statisticsItem">Bad: {bad}</li>
        <li className="statisticsItem">Total: {total}</li>
        <li className="statisticsItem">
          Positive feedback: {positivePercentage} %
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
