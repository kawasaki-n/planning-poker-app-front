import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import { FC, useEffect, useState } from 'react';

import { ConnectionType } from '@/type';

import { Bet } from '../atoms/Bet';
import { LoadingSpinner } from '../atoms/LoadingSpinner';

type Props = {
  connections: Array<ConnectionType>;
  loading: boolean;
};

export const Board: FC<Props> = ({ connections, loading }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(connections.every((connection) => !!connection.value));
  }, [connections]);

  if (connections.length === 0 || loading) {
    return <LoadingSpinner />;
  }
  return (
    <Container sx={{ width: '100%', height: '100%', marginY: 3 }}>
      <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
        {connections.map((connection, i) => {
          return <Bet key={i} connection={connection} open={open}></Bet>;
        })}
      </Stack>
    </Container>
  );
};
