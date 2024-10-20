import type * as React from "react"
import Box from "@mui/material/Box"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  addAnswer,
  fetchData,
  resetState,
  setCurrentQuestion,
} from "../app/store/questionsSlice"
import {
  selectCurQuestion,
  selectIsTimeOver,
  selectQuestions,
} from "../app/store/selectors"
import { useCallback, useEffect, useState } from "react"
import Stepper from "../components/stepper/stepper"
import FinishModal from "../components/stepper/finish-modal"
import Question from "../components/question/question"
import ControlButtons from "../components/stepper/control-buttons"
import Circular from "../components/circular"

export default function Main() {

  const dispatch = useAppDispatch()
  const questions = useAppSelector(selectQuestions)
  const curQuestion = useAppSelector(selectCurQuestion)
  const isTimeOver = useAppSelector(selectIsTimeOver)

  const [activeStep, setActiveStep] = useState(0)
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string | string[]>("")
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  useEffect(() => {
    if (inputValue.length > 0) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [inputValue])

  useEffect(() => {
    dispatch(setCurrentQuestion(questions[activeStep]))
    if (questions.length > 0 && questions.length === activeStep) {
      setIsFinish(true)
    } else if (isFinish) {
      setIsFinish(false)
    }
  }, [activeStep])

  useEffect(() => {
    if (curQuestion?.type === "single" && curQuestion?.options) {
      setInputValue(curQuestion?.options[0])
    } else if (curQuestion?.default) {
      setInputValue(curQuestion.default)
    } else {
      setInputValue("")
    }
  }, [curQuestion])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
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
  }, [curQuestion])

  const handleNext = () => {
    const { id } = questions[activeStep]
    dispatch(addAnswer({ id, userAnswer: inputValue }))
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleSkip = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    dispatch(resetState())
    dispatch(fetchData())
  }

  function renderForm() {

    if(isTimeOver || isFinish) return <FinishModal handleReset={handleReset}/>

    return (
      <>
        <Stepper list={questions} activeStep={activeStep}/>
        {curQuestion && (
          <>
            <Question question={curQuestion} handleChange={handleChange} />
            <ControlButtons
              isStepOptional={curQuestion?.isOptional}
              handleSkip={handleSkip}
              handleNext={handleNext}
              isDisabled={isDisabled}
            />
          </>
        )}
      </>
    )
  }

  return (
    <Box sx={{ width: "100%" }}>
      {questions.length > 0 ? renderForm() : <Circular/>}
    </Box>
  )
}
