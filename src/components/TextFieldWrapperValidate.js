import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const TextFieldWrapperValidate = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const validateAndSubmit = () => {
    setError(false);
    setErrMsg("");
    // check if input is empty
    if (input === "") {
      setError(true);
      setErrMsg("Input required");
      return;
    }
    // convert the input to array by spliting by comma
    const numbers = input.split(",");

    // check if the array contains numbers only
    const isNumbersOnly = numbers.every((num) => typeof num === "number");

    console.log(isNumbersOnly);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={10}>
        <TextField
          onChange={handleChange}
          fullWidth
          placeholder="Enter comma separated numbers"
          error={error}
          helperText={error && errMsg}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Button
          variant="contained"
          sx={{ height: "100%", width: 200 }}
          onClick={validateAndSubmit}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default TextFieldWrapperValidate;
