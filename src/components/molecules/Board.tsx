import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import { FC } from 'react';

import { Bet } from '../atoms/Bet';

type Props = {
  connectionId: string | undefined;
  connections: Array<{ connectionId: string }>;
};

export const Board: FC<Props> = ({ connectionId, connections }: Props) => {
  return (
    <>
      <Container sx={{ width: '100%', marginY: 3 }}>
        <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
          {connections.map((connection, i) => {
            return (
              <Bet
                key={i}
                connection={connection}
                myself={connection.connectionId === connectionId}
              ></Bet>
            );
          })}
        </Stack>
      </Container>
    </>
  );
};
