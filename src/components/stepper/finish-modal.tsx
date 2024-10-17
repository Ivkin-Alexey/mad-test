import { Box, Button, Typography } from "@mui/material"
import AnswersList from "../answers-list"
import { useAppSelector } from "../../app/hooks"
import { selectIsFailed } from "../../app/store/selectors"

interface IProps {
  handleReset: () => void
}

function FinishModal(props: IProps) {

  const {handleReset} = props

  const isFailed = useAppSelector(selectIsFailed)

  return (
    <>
      <Typography sx={{ mt: 2, mb: 1, padding: "8px" }}>
        {isFailed ? "К сожалению, время вышло!" : "Поздравляем! Вы прошли тест!"}
      </Typography>
      {isFailed ? null : <AnswersList/>}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleReset} variant="contained">Начать заново</Button>
      </Box>
    </>
  )
}

export default FinishModal
