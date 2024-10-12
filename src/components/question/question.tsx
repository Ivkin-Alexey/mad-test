import {
  Box,
  Container,
  TextField,
  Typography,
} from "@mui/material"
import type { IQuestion } from "../../models/models"
import CheckBox from "./checkbox"
import Radio from "./radio"
import { useMemo } from "react"

interface IProps {
  question: IQuestion
}

function Question(props: IProps) {

  const { topic, type, options } = props.question

  const renderInputs = useMemo(() => {

    if (type === "one" && options) {
      return <Radio options={options} />
    }
  
    if (type === "multiple" && options) {
      return <CheckBox options={options}/>
    }
  
    if (type === "singleLine") {
      return <TextField id="outlined-basic" variant="outlined" />
    }
  
    if (type === "multiline") {
      return (
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={3}
          defaultValue="Я очень хороший человек."
        />
      )
    }

    return null
  }, [props.question])

  return (
    <Container>
      <Typography>{topic}</Typography>
      {renderInputs}
    </Container>
  )
}

export default Question
