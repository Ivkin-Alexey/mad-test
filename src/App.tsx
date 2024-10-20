import { Box, Container } from "@mui/material"
import Header from "./components/header"
import { useEffect } from "react"
import { useAppDispatch } from "./app/hooks"
import { fetchData } from "./app/store/questionsSlice"
import Main from "./routes/main"

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
        <Main />
      </Box>
    </Container>
  )
}

export default App
