import { createTheme, Grid } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 769,
      lg: 1140,
      xl: 1440,
    },
  },
});

const GridMUI = () => {
  return (
    <div>
      <h1>Day60 - MUI Grid Box - Custom Theme</h1>
      <main>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: {
                    sx: 'none',
                    sm: 'none',
                    md: 'block',
                  },
                }}
              >
                First Column
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: {
                    sx: 'none',
                    sm: 'none',
                    md: 'block',
                  },
                }}
              >
                Second Column
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </main>
    </div>
  );
};

export default GridMUI;
