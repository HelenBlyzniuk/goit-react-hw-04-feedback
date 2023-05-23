import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export function Section({ children, title }) {
  return (
    <section className={css.widget}>
      <h1 className={css.widget_title}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

// export class Section extends Component {
//   render() {
//     const children = this.props.children;
//     const title = this.props.title;
//     return (
//       <section className={css.widget}>
//         <h1 className={css.widget_title}>{title}</h1>
//         {children}
//       </section>
//     );
//   }
// }

// Section.propTypes = {
//   children: PropTypes.element.isRequired,
//   title: PropTypes.string.isRequired,
// };
