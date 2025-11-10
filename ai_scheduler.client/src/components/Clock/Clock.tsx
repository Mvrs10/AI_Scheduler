import { useState, useEffect } from "react";

import styles from "./Clock.module.css";

const Clock = () => {

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getCurrentDate = () => new Date();

    const [time, setTime] = useState(getCurrentTime());
    const [date, setDate] = useState(getCurrentDate());

    useEffect(() => {
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000;

    const timeout = setTimeout(() => {
        setTime(getCurrentTime());

        const interval = setInterval(() => {
            setDate(getCurrentDate());
            setTime(getCurrentTime());
        }, 60 * 1000);

        setDate(getCurrentDate());

        return () => clearInterval(interval);
    }, delay);

        return () => clearTimeout(timeout);
    }, []);

  return <div className={styles.container}>
    <span>{date.toLocaleDateString()}</span>
    <span>{time}</span>
  </div>;
}

export default Clock;