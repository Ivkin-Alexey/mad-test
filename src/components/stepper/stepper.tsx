import { IQuestion } from "../../models/models"
import MUIStepper from "@mui/material/Stepper"
import { Step, StepLabel } from "@mui/material"

interface IProps {
  list: IQuestion[]
  activeStep: number
}

export default function Stepper(props: IProps) {

  const {list,  activeStep} = props

  return (
    <MUIStepper activeStep={activeStep} sx={{ marginBottom: "20px" }}>
    {list.map((_, i) => {
      return (
        <Step key={i}>
          <StepLabel />
        </Step>
      )
    })}
  </MUIStepper>
  )
}
