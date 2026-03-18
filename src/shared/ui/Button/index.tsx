import MuiButton, { type ButtonProps } from '@mui/material/Button';

type Props = ButtonProps;

export const Button = ({ children, ...props }: Props) => {
  return (
    <MuiButton
      variant="contained"
      disableRipple
      {...props}
      sx={{
        backgroundColor: 'black',
        borderRadius: '6px',
        height: '42px',
      }}
    >
      {children}
    </MuiButton>
  );
};
