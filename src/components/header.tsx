import { Box, Typography } from "@mui/material"
import Timer from "./timer"

function Header() {
  return (
    <Box sx={{display: "flex", padding: "8px"}}>
          <Typography variant="h6" sx={{marginRight: "10px"}}>Тестирование</Typography>
          <Timer time={10}/>
    </Box>
  )
}

export default Header
