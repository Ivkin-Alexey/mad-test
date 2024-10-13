import { Box, Button, Typography } from "@mui/material"
import AnswersList from "../answers-list"

interface IProps {
  handleReset: () => void
}

function FinishModal(props: IProps) {

  const {handleReset} = props

  return (
    <>
      <Typography sx={{ mt: 2, mb: 1 }}>
        Поздравляем! Вы прошли тест!
      </Typography>
      <AnswersList/>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleReset}>Начать заново</Button>
      </Box>
    </>
  )
}

export default FinishModal
