import { useContext, useEffect, useState } from "react";

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";

export default function TimersDashboard() {
  const URL = "http://localhost:8080/timers";

  // useEffect(() => {
  //   fetchTimersData();
  // }, []);

  function handleCreateFormSubmit(timer) {
    // createTimer(timer);
  }

  function handleEditFormSubmit(attrs) {
    // updateTimer(attrs);
  }

  return (
    <div>
      <h1>Timers</h1>

      <div>
        <EditableTimerList />
        <ToggleableTimerForm  />
      </div>
    </div>
  );
}
