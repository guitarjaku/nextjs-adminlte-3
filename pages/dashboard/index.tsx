import { useContext } from "react";
import { CounterContext } from "../../store/CounterProvider";

const Dashboard = () => {
  const { counter, addCounter, subCounter, resetCounter } = useContext<any>(
    CounterContext
  );

  return (
    <div>
      <p>This Dashboard</p>
      {counter}
      <button onClick={() => addCounter(1)}>บวก</button>
      <button onClick={() => subCounter(1)}>ลบ</button>
      <button onClick={() => resetCounter()}>ล้าง</button>
    </div>
  );
};

export default Dashboard;
