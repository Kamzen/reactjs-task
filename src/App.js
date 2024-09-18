import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, Stack } from "@mui/material";
import TextFieldWrapperValidate from "./components/TextFieldWrapperValidate";

function App() {
  return (
    <Stack paddingX={{ xs: 2, md: 50 }} width='100%' paddingY={20}>
      <CssBaseline />
      <TextFieldWrapperValidate />
    </Stack>
  );
}

export default App;
