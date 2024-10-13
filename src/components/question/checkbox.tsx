import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"

interface IProps {
  options: string[]
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function CheckBox(props: IProps) {
  const { options, handleChange } = props
  return (
    <FormGroup>
      {options.map(el => {
        return (
          <FormControlLabel key={el} control={<Checkbox onChange={handleChange}/>} label={el} />
        )
      })}
    </FormGroup>
  )
}

export default CheckBox
