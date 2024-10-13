import { Box, Button, Typography } from "@mui/material";

interface IProps {
  isStepOptional: boolean | undefined,
  handleSkip: () => void,
  handleNext: () => void,
  isDisabled: boolean
}

function ControlButtons(props: IProps) {

const {isStepOptional = false, handleSkip, handleNext, isDisabled} = props

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                На
              </Button> */}
        <Box sx={{ flex: "1 1 auto" }} />
        {isStepOptional && (
          <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
            Пропустить
          </Button>
        )}
        <Button onClick={handleNext} disabled={isDisabled}>
          {/* {isFinal ? "Завершить" : "Ответить"} */}
          Ответить
        </Button>
      </Box>
    </>
  )
}

export default ControlButtons
