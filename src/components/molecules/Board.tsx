import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import { FC, useEffect, useState } from 'react';

import { ConnectionType } from '@/type';

import { Bet } from '../atoms/Bet';
import { LoadingSpinner } from '../atoms/LoadingSpinner';

type Props = {
  connectionId: string | undefined;
  connections: Array<ConnectionType>;
};

export const Board: FC<Props> = ({ connectionId, connections }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(connections.every((connection) => !!connection.value));
  }, [connections]);

  if (connections.length === 0) {
    return <LoadingSpinner />;
  }
  return (
    <Container sx={{ width: '100%', height: '100%', marginY: 3 }}>
      <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
        {connections.map((connection, i) => {
          return (
            <Bet
              key={i}
              connection={connection}
              myself={connection.connectionId === connectionId}
              open={open}
            ></Bet>
          );
        })}
      </Stack>
    </Container>
  );
};
