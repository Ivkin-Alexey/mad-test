import { Box, Typography } from "@mui/material"
import Timer from "./timer"
import { selectIsFailed, selectTime } from "../app/store/selectors"
import { useAppSelector } from "../app/hooks"

function Header() {
  
  const time = useAppSelector(selectTime)
  const isFailed = useAppSelector(selectIsFailed)

  return (
    <Box sx={{ display: "flex", padding: "8px" }}>
      <Typography variant="h6" sx={{ marginRight: "10px" }}>
        Тестирование
      </Typography>
      {time && !isFailed && <Timer time={time} />}
    </Box>
  )
}

export default Header
