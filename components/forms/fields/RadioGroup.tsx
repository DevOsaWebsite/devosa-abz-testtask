'use client';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from '@mui/material';

type Props = {
  buttons: any[];
  label: string;
};
export const RadioGroup = ({ buttons, label }: Props) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup>
        {!!buttons &&
          buttons.map((position, index: number) => (
            <FormControlLabel
              key={position.id}
              value={position.name}
              control={<Radio color="secondary" />}
              label={position.name}
            />
          ))}
      </MuiRadioGroup>
    </FormControl>
  );
};
