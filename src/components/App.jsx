import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function clickHandle(e) {
    const name = e.currentTarget.name;
    if (name === 'good') {
      setGood(good + 1);
    }
    if (name === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (name === 'bad') {
      setBad(bad + 1);
    }
  }

  const feedback = { good, neutral, bad };
  function countTotalFeedback({ good, neutral, bad }) {
    const total = good + neutral + bad;
    return total;
  }

  function countPositiveFeedbackPercentage({ good, neutral, bad }) {
    const total = good + neutral + bad;
    const positiveTotal = Math.round((good / total) * 100);
    return positiveTotal;
  }

  return (
    <div style={{ display: 'block', width: '100wv', paddingTop: 50 }}>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          clickHandle={clickHandle}
          options={Object.keys(feedback)}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification title="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

// export function App() {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const clickHandle = e => {
//     const name = e.currentTarget.name;
//     switch (name) {
//       case 'good':
//         setGood(good + 1);
//         break;
//       case 'neutral':
//         setNeutral(neutral + 1);
//         break;
//       case 'bad':
//         setBad(bad + 1);
//         break;
//       default:
//         break;
//     }
//   };
//   const feedback = { good, neutral, bad };

//   const countTotalFeedback = feedback => {
//     const total = feedback.good + feedback.neutral + feedback.bad;
//     return total;
//   };

//   const countPositiveFeedbackPercentage = feedback => {
//     const total = feedback.good + feedback.neutral + feedback.bad;
//     let positiveTotal = Math.round((feedback.good / total) * 100);
//     return positiveTotal;
//   };

//   return (
//     <div style={{ display: 'block', width: '100wv', paddingTop: 50 }}>
//       <Section title="Please, leave feedback">
//         <FeedbackOptions
//           clickHandle={clickHandle}
//           options={Object.keys(feedback)}
//         />
//       </Section>

//       <Section title="Statistics">
//         {countTotalFeedback() > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification title="There is no feedback" />
//         )}
//       </Section>
//     </div>
//   );
// }

// const INITIAL_STATE = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// export class App extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   clickHandle = e => {
//     const name = e.currentTarget.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = ({ good, neutral, bad } = this.state) => {
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
//     const total = good + neutral + bad;
//     const positiveTotal = Math.round((good / total) * 100);
//     return positiveTotal;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div style={{ display: 'block', width: '100wv', paddingTop: 50 }}>
//         <Section title="Please, leave feedback">
//           <FeedbackOptions
//             clickHandle={this.clickHandle}
//             options={Object.keys(this.state)}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification title="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
