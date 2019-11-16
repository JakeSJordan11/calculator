import * as math from "mathjs";
import React, { useState } from "react";
import { Button, ClearButton, Input } from "./Components";
import Grid from "./Components/StyledComponents/Grid";

function App() {
  const [input, setInput] = useState("");
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  /*creates a function that uses an array to see 
  if a given string ends with any item in that array */
  const endsWithAny = (suffixes, string) => {
    return suffixes.some(function(suffix) {
      return string.endsWith(suffix);
    });
  };

  /*   when equals is clicked it only evaluates the input field
  if the last item is a number and the input field is not blank. */
  const handleEqual = () => {
    if (input.length > 1 && endsWithAny(numbers, input) === true) {
      setInput(math.evaluate(input));
    }
  };

  // adds clicked button to the input field.
  const addToInput = val => {
    setInput(input + val);
  };

  return (
    <Grid>
      <Input zone="input" value={input} />
      <ClearButton zone="btnC" value="C" handleClear={() => setInput("")} />
      <Button zone="btnE" value="=" handleClick={handleEqual} />
      <Button zone="btnD" value="/" handleClick={addToInput} />
      <Button zone="btnM" value="*" handleClick={addToInput} />
      <Button zone="btnS" value="-" handleClick={addToInput} />
      <Button zone="btnA" value="+" handleClick={addToInput} />
      <Button zone="btnP" value="." handleClick={addToInput} />
      <Button zone="btn0" value="0" handleClick={addToInput} />
      <Button zone="btn1" value="1" handleClick={addToInput} />
      <Button zone="btn2" value="2" handleClick={addToInput} />
      <Button zone="btn3" value="3" handleClick={addToInput} />
      <Button zone="btn4" value="4" handleClick={addToInput} />
      <Button zone="btn5" value="5" handleClick={addToInput} />
      <Button zone="btn6" value="6" handleClick={addToInput} />
      <Button zone="btn7" value="7" handleClick={addToInput} />
      <Button zone="btn8" value="8" handleClick={addToInput} />
      <Button zone="btn9" value="9" handleClick={addToInput} />
    </Grid>
  );
}

export default App;
