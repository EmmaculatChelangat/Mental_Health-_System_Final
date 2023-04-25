import React, {useState} from 'react';
import '../CSS/Assessment.css';
import { Link } from 'react-router-dom';

function Assesment() {
  const [sleep, setSleep] = useState('');
  const [anxiety, setAnxiety] = useState('');
  const [mood, setMood] = useState('');
  const [score, setScore] = useState(null);
  const [recommendation, setRecommendation] = useState('');

  function calculateScore(sleep, anxiety, mood) {
    let score = 0;

    if (sleep === '5 hours or less') {
      // score += 2;
      score += 50;
    } else if (sleep === '6 hours') {
      score += 1;
    }

    if (anxiety === 'High') {
      // score += 2;
      score += 20;
    } else if (anxiety === 'Moderate') {
      score += 1;
    }

    if (mood === 'Poor') {
      // score += 2;
      score += 25;
    } else if (mood === 'Neutral') {
      score += 1;
    }

    return score;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const score = calculateScore(sleep, anxiety, mood);
    setScore(score);

    if (score <= 50) {
      setRecommendation('Your symptoms seem to be mild. You can try a free online course.');
    } else if (score > 50 && score <= 75) {
      setRecommendation('Your symptoms seem to be moderate. You may want to consider seeing a therapist.');
    } else {
      setRecommendation(`Your symptoms seem to be moderate to severe. It\'s recommended to see a therapist. `);
    }
  }
  return (
    <>
    <h1 className='assessment-head'>Self Assesment</h1>

    <div className="assessement">
      <form className='assessement-form' onSubmit={handleSubmit}>
        <label>
          How many hours of sleep did you get last night? <br></br>
          <select className='select-field' value={sleep} onChange={(e) => setSleep(e.target.value)}>
            <option value="">Please select</option>
            <option value="5 hours or less">5 hours or less</option>
            <option value="6 hours">6 hours</option>
            <option value="7 hours">7 hours</option>
            <option value="8 hours or more">8 hours or more</option>
          </select>
        </label>
        <br />
        <label>
          How anxious have you been feeling lately?<br></br>
          <select className='select-field' value={anxiety} onChange={(e) => setAnxiety(e.target.value)}>
            <option value="">Please select</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </label>
        <br />
        <label>
          How would you rate your overall mood lately?<br></br>
          <select className='select-field' value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="">Please select</option>
            <option value="Good">Good</option>
            <option value="Neutral">Neutral</option>
            <option value="Poor">Poor</option>
          </select>
        </label>
        <br />
        <button className='assesment-button' type="submit">Submit</button>
      </form>
      {score && <p>Your score is {score}. {recommendation}</p>}
    </div>
    <div className='assesment-button2'>
      <Link to='/Pages/Free.js'><button className='assesment-free'>Free Services</button></Link>
      <Link to='/Pages/Booking.js'><button className='assesment-free'>therapist</button></Link>
    </div>
  

    </>
  )
}

export default Assesment;
