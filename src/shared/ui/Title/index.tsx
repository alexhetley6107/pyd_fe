import { Typography, type TypographyProps } from '@mui/material';

type Props = TypographyProps;

export const Title = ({ children, ...props }: Props) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: '36px',
        fontWeight: 500,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
