import { Box, Container } from "@mui/material"
import Stepper from "./components/stepper/stepper"
import Header from "./components/header"
import { useEffect } from "react"
import { useAppDispatch } from "./app/hooks"
import { fetchData } from "./app/store/questionsSlice"

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(fetchData())
  }, [])

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
