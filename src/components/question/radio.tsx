import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio as MUIRadio,
} from "@mui/material"

interface IProps {
  options: string[]
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Radio(props: IProps) {
  const { options, handleChange } = props

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={options[0]}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        {options.map(el => {
          return (
            <FormControlLabel
              key={el}
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
