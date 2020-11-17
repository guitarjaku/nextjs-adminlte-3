import { useContext } from "react";
import { CounterContext } from "../../store/CounterProvider";

const Machines = () => {
  const { counter, addCounter, subCounter } = useContext<any>(CounterContext);
  return (
    <div>
      This Machines
      {counter}
    </div>
  );
};

export default Machines;
