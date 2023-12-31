import { useEffect, useState } from "react";

const Countdown = () => {
  function calculateTimeUntilNovember11() {
    // Set the target date to November 11, 2023
    const targetDate = new Date("2023-11-11T00:00:00Z");

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const difference = targetDate - currentDate;

    if (difference < 0) return { hours: 0, minutes: 0, second: 0 };

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Return the result as an object
    return {
      hours,
      minutes,
      seconds,
    };
  }

  const [count, setCount] = useState(calculateTimeUntilNovember11());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(calculateTimeUntilNovember11());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {count.hours}:{count.minutes}:{count.seconds}
    </div>
  );
};
export default Countdown;
