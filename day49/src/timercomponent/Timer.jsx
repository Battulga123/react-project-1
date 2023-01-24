import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import { Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";

export default function Timer({ title, project, elapsed, runningSince }) {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const timer = renderElapsedString(elapsed, runningSince);
  const [runningTime, setRunningTime] = useState(0);
  console.log(timer);

  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          maxWidth: 345,
          marginBottom: 5,
        }}
      >
        <Typography sx={{ fontSize: 28 }} color="text.secondary">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{runningTime}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <DeleteIcon />
          <ModeEditOutlineIcon />
        </Box>
        <TimerActionButton
          isTimerRunnig={timerIsRunning}
          onStartClick={() => {
            setTimerIsRunning(true);
          }}
          onStopClick={() => {
            setTimerIsRunning(false);
          }}
        />
      </Card>
    </Container>
  );
}
