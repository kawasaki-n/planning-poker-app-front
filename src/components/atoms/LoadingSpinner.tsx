import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';

type Props = {
  size?: number;
  color?: string;
  center?: boolean;
};

export const LoadingSpinner: FC<Props> = ({ size, color, center = true }) => {
  const progress = <CircularProgress size={size} sx={{ color }} />;
  return center ? (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>{progress}</Box>
  ) : (
    <>{progress}</>
  );
};
