import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Timer = ({ prevMinutes, prevSeconds }) => {
  const [minutes, setMinutes] = useState(prevMinutes);
  const [seconds, setSeconds] = useState(prevSeconds);
  const [status, setStatus] = useState("stop");
  const foo = useRef();

  useEffect(() => {
    if (status === "working") {
      foo.current = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    }
    if (status === "stop") {
      clearTimeout(foo.current);
    }
  }, [status]);

  useEffect(() => {
    if (seconds === -1) {
      setSeconds(59);
      setMinutes((prev) => prev - 1);
    }
    if (minutes === -1) {
      clearInterval(foo.current);
      setSeconds(0);
      setMinutes(0);
    }
  }, [seconds, minutes]);

  function handleTimer(evt) {
    if (evt.target.name === "button-play") {
      setStatus("working");
    }
  }

  function stopTimer(evt) {
    if (evt.target.name === "button-pause") {
      setStatus("stop");
    }
  }

  return (
    <>
      <span className="description">
        <button
          name="button-play"
          className="icon icon-play"
          onClick={handleTimer}
          type="button"
          aria-label="Mute volume"
        />
        <button
          name="button-pause"
          className="icon icon-pause"
          onClick={stopTimer}
          type="button"
          aria-label="Mute volume"
        />
        {minutes}:{seconds}
      </span>
    </>
  );
};

Timer.propTypes = {
  prevMinutes: PropTypes.string.isRequired,
  prevSeconds: PropTypes.string.isRequired
};

export default Timer;
