import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { ConnectionType } from '@/type';

type Props = {
  connection: ConnectionType;
  myself: boolean;
  open: boolean;
};

export const Bet: FC<Props> = ({ connection, open }: Props) => {
  const value = connection.value;
  return (
    <Box sx={{ p: 2, border: '2px dashed grey', height: '40px', width: '40px' }}>
      <Typography align="center" variant="h4">
        {value ? (open ? value : '？') : ''}
      </Typography>
    </Box>
  );
};
