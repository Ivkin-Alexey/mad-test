import { Box, Button, Typography } from "@mui/material";

interface IProps {
    handleReset: () => void
}

function FinishModal(props: IProps) {
    return (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Поздравляем! Вы прошли тест!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={props.handleReset}>Начать заново</Button>
          </Box>
        </>
      )
}

export default FinishModal