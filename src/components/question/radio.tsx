import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio as MUIRadio,
} from "@mui/material"

interface IProps {
  options: string[]
}

function Radio(props: IProps) {
  const { options } = props

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={options[0]}
        name="radio-buttons-group"
      >
        {options.map(el => {
          return (
            <FormControlLabel
              value={el}
              control={<MUIRadio />}
              label={el}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default Radio
