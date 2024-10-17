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
  const { topic, type, options, isOptional } = question
  const title = topic + (isOptional ? " (возможно несколько вариантов)" : "")
  
  const renderInputs = useMemo(() => {
    if (type === "single" && options) {
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
                    fullWidth={true}
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
          defaultValue={question.default}
          onChange={handleChange}
          fullWidth={true}
        />
      );
    }

    return null;
  }, [handleChange, question]);

  return (
    <Container>
      <Typography>{title}</Typography>
        {renderInputs}
    </Container>
  );
}

export default Question;
