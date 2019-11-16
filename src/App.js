import React, { useState } from "react";
import Grid from "./Components/Grid";
import Button from "./Components/Button";
import Input from "./Components/Input";
import ClearButton from "./Components/ClearButton";
import * as math from "mathjs";

function App(props) {
  const [input, setInput] = useState("");

  const endsWithAny = (suffixes, string) => {
    return suffixes.some(function(suffix) {
      return string.endsWith(suffix);
    });
  };

  const addToInput = val => {
    setInput(input + val);
  };

  const handleEqual = () => {
    if (
      input.length > 1 &&
      endsWithAny(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], input) ===
        true
    ) {
      setInput(math.evaluate(input));
    }
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
