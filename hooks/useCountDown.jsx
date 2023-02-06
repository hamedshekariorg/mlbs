import { useEffect, useState } from 'react';

const useCountDown = ({ minutes = 0, seconds = 0 }) => {
  //the state for timer
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  // on & off timer
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => tick(), [1000]);
    return () => clearInterval(timer);
  });

  //update timer
  const tick = () => {
    // ! do nothing if paused
    if (!timerOn) return;
    // ? Time up
    if (time.minutes === 0 && time.seconds === 0) {
      setTimerOn(false);
    } else if (time.seconds === 0) {
      // ? decrement minute when second reached 0
      setTime({ minutes: time.minutes - 1, seconds: 59 });
    } else {
      // ? decrement seconds every 1 second
      setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
    }
  };

  //start timer
  const startTimer = () => {
    setTimerOn(true);
    setTime({ minutes: minutes, seconds: seconds });
  };

  // check if less than 10 then we need to
  // add '0' at the beginning of the variable
  const normalTime =
    time.minutes.toString().padStart(2, '0') +
    ':' +
    time.seconds.toString().padStart(2, '0');
  return {
    time: time.seconds === 0 && time.minutes === 0 ? 0 : normalTime,
    startTimer,
  };
};
export default useCountDown;
