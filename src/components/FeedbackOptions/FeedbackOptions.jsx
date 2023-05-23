import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ clickHandle, options }) {
  return (
    <ul className={css.control_buttons}>
      {options.map(btn => (
        <li className={css.control_button} key={btn}>
          <button
            className={css.control_btn}
            type="button"
            name={btn}
            onClick={clickHandle}
          >
            {btn}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  clickHandle: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
