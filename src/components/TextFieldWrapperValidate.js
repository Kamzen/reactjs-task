import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const TextFieldWrapperValidate = () => {
  const [input, setInput] = useState("");
  const [outPut, setOutput] = useState("");
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
    let numbers = input.split(",");
    // clean array on any empty element
    numbers = numbers.filter((num) => num !== "");

    // check if the array contains numbers only
    const isNumbersOnly = numbers.every((num) => {
      return !isNaN(parseInt(num));
    });

    if (!isNumbersOnly) {
      setError(true);
      setErrMsg("Input should only contain numbers.");
      return;
    }

    const orderDesc = numbers.sort((a, b) => b - a).join(",");
    setOutput(orderDesc);
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
          fullWidth
        >
          Save
        </Button>
      </Grid>

      {outPut && (
        <Grid item xs={12} md={12}>
          <Stack width="100%" alignItems="center" direction="row">
            <Typography fontWeight="bolder">Output: &nbsp;&nbsp;&nbsp;&nbsp;</Typography>
            <Typography>{outPut}</Typography>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};

export default TextFieldWrapperValidate;
