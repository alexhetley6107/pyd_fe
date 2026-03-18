import { Paper } from '@mui/material';
import s from './AuthLayout.module.css';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className={s.wrapper}>
      <Paper className={s.container} elevation={3} sx={{ borderRadius: '8px' }}>
        <Outlet />
      </Paper>
    </div>
  );
};
