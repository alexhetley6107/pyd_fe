import TextField, { type TextFieldProps } from '@mui/material/TextField';

type Props = TextFieldProps;

export const Input = ({ ...props }: Props) => {
  return (
    <TextField
      {...props}
      sx={{}}
      slotProps={{
        htmlInput: {
          sx: { padding: '8px 8px', height: '28px' },
        },
      }}
    />
  );
};
