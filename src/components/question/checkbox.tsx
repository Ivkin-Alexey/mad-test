import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"

interface IProps {
  options: string[]
}

function CheckBox(props: IProps) {
  const { options } = props
  return (
    <FormGroup>
      {options.map(el => {
        return (
          <FormControlLabel control={<Checkbox />} label={el} />
        )
      })}
    </FormGroup>
  )
}

export default CheckBox
