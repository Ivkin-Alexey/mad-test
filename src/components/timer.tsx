import { Chip } from "@mui/material"
import useTimer from "../hooks/useTimer"
import type { TTime } from "../models/models"
import { useEffect, useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { setIsFailed } from "../app/store/questionsSlice"

function Timer(props: { time: TTime }) {
    
    const { seconds, minutes } = useTimer(props.time)
    const dispatch = useAppDispatch()

    const [color, setColor] = useState<"primary" | "error">("primary")

    useEffect(() => {
        if(minutes === "00" && Number(seconds) < 10) {
            setColor("error")
        }
        if(minutes === "00" && seconds === "00") {
            dispatch(setIsFailed(true))
        }
    }, [seconds, minutes])

    

    return <Chip label={minutes + ":" + seconds} color={color} variant="outlined" />
}

export default Timer
