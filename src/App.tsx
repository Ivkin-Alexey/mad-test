import { Box, Container } from "@mui/material"
import Stepper from "./components/stepper/stepper"
import Header from "./components/header"
import questionsList from "./db"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { setCurrentQuestion, setQuestions } from "./app/store/questionsSlice"
import { selectAnswers } from "./app/store/selectors"

const App = () => {
  const dispatch = useAppDispatch()
  const answers = useAppSelector(selectAnswers)

  useEffect(() => {
    console.log(answers)
  }, [answers])

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setQuestions(questionsList))
      dispatch(setCurrentQuestion(questionsList[0]))
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [dispatch])

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Header />
        <Stepper />
      </Box>
    </Container>
  )
}

export default App
