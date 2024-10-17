import { Stack, Typography } from "@mui/material"
import { useAppSelector } from "../app/hooks"
import { selectAnswers } from "../app/store/selectors"

function AnswersList() {
  const list = useAppSelector(selectAnswers)

  return (
    <Stack spacing={2}>
      <Typography variant="h6" pl={"8px"}>Ваши ответы:</Typography>
      {list.map((el, i) => {
        let { userAnswer } = el
        if (Array.isArray(userAnswer)) {
          userAnswer = userAnswer.join(", ")
        }
        return <Typography key={i} pl={"8px"}>{i+1 + ". " + userAnswer}</Typography>
      })}
    </Stack>
  )
}

export default AnswersList
