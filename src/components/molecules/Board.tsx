import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import { FC, useEffect, useState } from 'react';

import { useWebSocketContext } from '@/providers/SocketProvider';
import { MessageType } from '@/type';

import { Bet } from '../atoms/Bet';

export const Board: FC = () => {
  const [connections, setConnections] = useState<Array<{ connectionId: string }>>([]);
  const { socket, connectionId, setConnectionId } = useWebSocketContext();

  useEffect(() => {
    if (!socket || !setConnectionId) {
      return;
    }

    socket.onopen = async () => {
      socket.send(JSON.stringify({ action: 'update', data: '' }));
    };

    socket.onmessage = async (e) => {
      const data: MessageType = JSON.parse(e.data);
      setConnectionId(data.connectionId);
      setConnections(data.connectionIds);
    };
  }, [setConnectionId, socket]);

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
