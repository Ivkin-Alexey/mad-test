import { Box, Container } from "@mui/material"
import Stepper from "./components/stepper/stepper"
import Header from "./components/header"

const App = () => {

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} >
        <Header/>
        <Stepper/>
      </Box>
    </Container>
  )
}

export default App
