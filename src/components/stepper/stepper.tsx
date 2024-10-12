import * as React from "react"
import Box from "@mui/material/Box"
import MUIStepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Typography from "@mui/material/Typography"
import FinishModal from "./finish-modal"
import ControlButtons from "./control-buttons"
import questions from "../../db"
import Question from "../question/question"

export default function Stepper() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  }

  const isStepOptional = (step: number) => {
    return questions[step].isOptional ?? false
  }

  const isFinish = (step: number) => {
    return questions.length === step
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleSkip = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <MUIStepper activeStep={activeStep}>
        {questions.map((el, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: {
            optional?: React.ReactNode
          } = {}
          if (el.isOptional) {
            labelProps.optional = (
              <Typography variant="caption">Необязательный вопрос</Typography>
            )
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps} />
            </Step>
          )
        })}
      </MUIStepper>
      {!isFinish(activeStep) && (
        <>
          <Question question={questions[activeStep]} />
          <ControlButtons
            isStepOptional={isStepOptional(activeStep)}
            handleSkip={handleSkip}
            handleNext={handleNext}
          />
        </>
      )}
      {isFinish(activeStep) && <FinishModal handleReset={handleReset} />}
    </Box>
  )
}
