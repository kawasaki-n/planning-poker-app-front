import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { ConnectionType } from '@/type';

type Props = {
  connection: ConnectionType;
  open: boolean;
};

export const Bet: FC<Props> = ({ connection, open }: Props) => {
  const value = connection.value;
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ border: '2px dashed grey', height: '75px', width: '75px' }}
    >
      <Typography align="center" variant="h4">
        {value ? (open ? value : '？') : ''}
      </Typography>
    </Stack>
  );
};
