import { Box, Button, Typography } from "@mui/material"
import AnswersList from "../answers-list"
import { useAppSelector } from "../../app/hooks"
import { selectIsTimeOver } from "../../app/store/selectors"

interface IProps {
  handleReset: () => void
}

function FinishModal(props: IProps) {

  const {handleReset} = props

  const isTimeOver = useAppSelector(selectIsTimeOver)

  return (
    <>
      <Typography sx={{ mt: 2, mb: 1, padding: "8px" }}>
        {isTimeOver ? "К сожалению, время вышло!" : "Поздравляем! Вы прошли тест!"}
      </Typography>
      {isTimeOver ? null : <AnswersList/>}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleReset} variant="contained">Начать заново</Button>
      </Box>
    </>
  )
}

export default FinishModal
