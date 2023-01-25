import Fancy from "./components/Fancy";
import Timer from "./timercomponent/Timer";
import TimerDashboard from "./timercomponent/TimerDashboard";
import TimerForm from "./timercomponent/TimerForm";

function App() {
  return (
    <div>
      <h1>Timer app</h1>
      {/* <Timer/> */}
      <TimerDashboard />
    </div>
  );
}

export default App;
