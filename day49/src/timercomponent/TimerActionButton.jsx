import { Button } from "@mui/material";

export default function TimerActionButton({
  isTimerRunnig,
  onStartClick,
  onStopClick,
}) {
  return (
    <div>
      {isTimerRunnig ? (
        <Button
          color={"error"}
          fullWidth={true}
          variant={"outlined"}
          onClick={onStopClick}
        >
          Stop
        </Button>
      ) : (
        <Button
          color={"success"}
          fullWidth={true}
          variant={"outlined"}
          onClick={onStartClick}
        >
          Start
        </Button>
      )}
    </div>
  );
}
