import PropTypes from 'prop-types';
import css from './Notification.module.css';

export function Notification({ title }) {
  return (
    <>
      <p className={css.notification}>{title}</p>
    </>
  );
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
