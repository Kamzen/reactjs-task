import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, Grid, Stack } from "@mui/material";

function App() {
  return (
    <Stack paddingX={{ xs: 2, md: 100 }}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}></Grid>
      </Grid>
    </Stack>
  );
}

export default App;
