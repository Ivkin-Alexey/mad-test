import type * as React from "react"
import Box from "@mui/material/Box"
import MUIStepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Typography from "@mui/material/Typography"
import FinishModal from "./finish-modal"
import ControlButtons from "./control-buttons"
import Question from "../question/question"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  addAnswer,
  resetAnswers,
  setCurrentQuestion,
} from "../../app/store/questionsSlice"
import { CircularProgress, Stack } from "@mui/material"
import {
  selectAnswers,
  selectCurQuestion,
  selectQuestions,
} from "../../app/store/selectors"
import { useState } from "react"

export default function Stepper() {
  const [activeStep, setActiveStep] = useState(0)
  const [inputValue, setInputValue] = useState<string | string[]>("")
  const dispatch = useAppDispatch()

  const questions = useAppSelector(selectQuestions)
  const curQuestion = useAppSelector(selectCurQuestion)
  const answers = useAppSelector(selectAnswers)

  const isFinish = (step: number) => {
    if (step !== 0) {
      renderAnswers()
      return questions.length === step
    }
  }

  function renderAnswers() {
    return (
      <Stack spacing={2}>
        {answers.map((el, i) => {
          let { userAnswer } = el
          if (Array.isArray(userAnswer)) {
            userAnswer = userAnswer.join(",")
          }
          return <Typography key={i}>{userAnswer}</Typography>
        })}
      </Stack>
    )
  }

  const handleNext = () => {
    const { id } = questions[activeStep]
    dispatch(addAnswer({ id, userAnswer: inputValue }))
    dispatch(setCurrentQuestion(questions[activeStep + 1]))
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleSkip = () => {
    dispatch(setCurrentQuestion(questions[activeStep + 1]))
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    dispatch(setCurrentQuestion(questions[0]))
    dispatch(resetAnswers())
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target

    if (type === "checkbox") {
      setInputValue(prev => {
        if (checked) {
          return Array.isArray(prev) ? [...prev, name] : [name]
        } else {
          return Array.isArray(prev) ? prev.filter(el => el !== name) : []
        }
      })
    } else {
      setInputValue(value)
    }
  }

  function renderStepper() {
    if (!questions) return null

    return (
      <>
        {
          <MUIStepper activeStep={activeStep} sx={{ marginBottom: "20px" }}>
            {questions.map((el, index) => {
              return (
                <Step key={index}>
                  <StepLabel />
                </Step>
              )
            })}
          </MUIStepper>
        }
        {!isFinish(activeStep) && curQuestion && (
          <>
            <Question question={curQuestion} handleChange={handleChange} />
            <ControlButtons
              isStepOptional={curQuestion?.isOptional}
              handleSkip={handleSkip}
              handleNext={handleNext}
            />
          </>
        )}
        {isFinish(activeStep) && (
          <FinishModal
            handleReset={handleReset}
            answersList={renderAnswers()}
          />
        )}
      </>
    )
  }

  function renderCircular() {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ width: "100%" }}>
      {questions.length > 0 ? renderStepper() : renderCircular()}
    </Box>
  )
}
