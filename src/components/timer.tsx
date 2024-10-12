import { Chip } from "@mui/material"
import useTimer from "../hooks/useTimer"
import type { TTime } from "../models/models"

function Timer(props: { time: TTime }) {
    
    const { seconds, minutes } = useTimer(props.time)

    return <Chip label={minutes + ":" + seconds} color="primary" variant="outlined" />
}

export default Timer
