import {
  Container,
  TextField,
  Typography,
} from "@mui/material";
import type { IQuestion } from "../../models/models";
import CheckBox from "./checkbox";
import Radio from "./radio";
import { useMemo } from "react";

interface IProps {
  question: IQuestion;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Question(props: IProps) {

  const {handleChange, question} = props
  const { topic, type, options } = question;
  
  const renderInputs = useMemo(() => {
    if (type === "one" && options) {
      return <Radio options={options} handleChange={handleChange} />;
    }

    if (type === "multiple" && options) {
      return <CheckBox options={options} handleChange={handleChange} />;
    }

    if (type === "singleLine") {
      return (
        <TextField
          id="outlined-basic"
          name="singleLine"
          variant="outlined"
          onChange={handleChange}
        />
      );
    }

    if (type === "multiline") {
      return (
        <TextField
          id="outlined-multiline-static"
          name="multiline"
          multiline
          rows={3}
          defaultValue="Я очень хороший человек."
          onChange={handleChange}
        />
      );
    }

    return null;
  }, [handleChange, options, type]);

  return (
    <Container>
      <Typography>{topic}</Typography>
        {renderInputs}
    </Container>
  );
}

export default Question;
