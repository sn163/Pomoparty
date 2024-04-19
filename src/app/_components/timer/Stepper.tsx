import { useEffect, useState } from "react";
import { useTimerContext } from "../context/TimerContext";
import uuid from "react-uuid";
import Image from "next/image";

export const Stepper = () => {
  const { timer } = useTimerContext();
  const { activeStep } = timer;
  const [totalRounds, setTotalRounds] = useState([
    ...Array(timer.settings.rounds).keys(),
  ]);
  const listId = uuid();

  useEffect(() => {
    setTotalRounds([...Array(timer.settings.rounds).keys()]);
  }, [timer.settings.rounds]);

  return (
    <div className="overflow-x-auto">
      <h2 className="mb-4 text-center font-title text-3xl text-primary">
        Rounds
      </h2>
      <ul className="steps">
        {totalRounds.map((round, i) => {
          return (
            <li
              key={`${listId}-${i}`}
              data-content={activeStep > round ? "✓" : round + 1}
              className={`step ${activeStep > round ? "step-primary" : ""}`}
            >
              {activeStep === round && (
                <Image
                  src="/svg/pizza-slice.svg"
                  className="mt-2 animate-bounce"
                  height={30}
                  width={30}
                  alt="pizza icon"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
