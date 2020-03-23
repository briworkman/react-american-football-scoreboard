//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeCount, setHomeCount] = useState(0);
  const [awayCount, setAwayCount] = useState(0);

  //stretch constants
  const [down, setDowns] = useState(1);
  const [toGo, setYards] = useState(10);
  const [ballOn, setBallOn] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const [timer, setTimer] = useState(59);
  useEffect(() => {
    const clock = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearTimeout(clock);
      }
    }, 1000);
  }, [timer]);
  //Functions for stretch goals
  const quarterCounter = () => {
    if (quarter < 4) {
      setQuarter(quarter + 1);
    } else {
      setQuarter(1);
    }
  };
  const downCounter = () => {
    if (down < 4) {
      setDowns(down + 1);
    } else {
      setDowns(1);
    }
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">00:{timer}</div>
          <div className="away">
            <h2 className="away__name">Titans</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow
          down={down}
          yardsLeft={toGo}
          ballOn={ballOn}
          quarter={quarter}
        />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeCount(homeCount + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeCount(homeCount + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayCount(awayCount + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setAwayCount(awayCount + 3)}
          >
            Away Field Goal
          </button>
        </div>
        <div className="scoreBoardControls">
          <button className="down" onClick={downCounter}>
            Downs
          </button>
          <button className="quarter" onClick={quarterCounter}>
            Quarter
          </button>

          <button className="yardsLeft" onClick={() => setYards(toGo + 1)}>
            To Go +1
          </button>
          <button className="yardsLeft" onClick={() => setYards(toGo - 1)}>
            To Go -1
          </button>

          <button className="ballOn" onClick={() => setBallOn(ballOn + 5)}>
            Ball On
          </button>
          <button
            className="reset"
            onClick={() => {
              setHomeCount(0);
              setAwayCount(0);
              setBallOn(0);
              setDowns(1);
              setQuarter(1);
            }}
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
