import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { FC, useCallback, useState, useEffect } from 'react';

import { updateAllConnections, updateConnection } from '@/api';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { Board } from '@/components/molecules/Board';
import { ClearButton } from '@/components/molecules/ClearButton';
import { Deck } from '@/components/molecules/Deck';
import { useWebSocketContext } from '@/providers/SocketProvider';
import { ConnectionType, MessageType } from '@/type';

export const Poker: FC = () => {
  const { socket } = useWebSocketContext();
  const [socketLoading, setSocketLoading] = useState<boolean>(true);
  const [connectionLoading, setConnectionLoading] = useState<boolean>(false);
  const [connectionId, setConnectionId] = useState<string>();
  const [connections, setConnections] = useState<Array<ConnectionType>>([]);
  const [bet, setBet] = useState<number | string | undefined>();

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onopen = async () => {
      setSocketLoading(false);
      socket.send(JSON.stringify({ action: 'update', data: '' }));
    };

    socket.onmessage = async (e) => {
      const data: MessageType = JSON.parse(e.data);
      setConnectionId(data.connectionId);
      setConnections(
        data.connections.sort((a, b) => {
          if (a.value && !b.value) {
            return -1;
          }
          if (!a.value && b.value) {
            return 1;
          }
          return 0;
        })
      );

      // for clear
      const connection = data.connections.find(
        (connection) => connection.connectionId === connectionId
      );
      if (connection && !connection.value) {
        setBet(undefined);
      }

      setConnectionLoading(false);
    };
  }, [bet, connectionId, connections, setConnections, socket]);

  const handleSelectCard = useCallback(
    async (num: number | string) => {
      if (!socket) {
        return;
      }

      setConnectionLoading(true);
      setBet(num);
      await updateConnection(connectionId, { value: num });
      socket.send(JSON.stringify({ action: 'update', data: '' }));
    },
    [connectionId, socket]
  );

  const handleClear = useCallback(async () => {
    if (!socket) {
      return;
    }

    setConnectionLoading(true);
    setBet(undefined);
    await updateAllConnections({ value: '' });
    socket.send(JSON.stringify({ action: 'update', data: '' }));
  }, [socket]);

  if (socketLoading) {
    return (
      <Box position={'absolute'} top={'50%'} left={'50%'}>
        <LoadingSpinner />
      </Box>
    );
  }
  return (
    <>
      <Deck bet={bet} onCardClick={handleSelectCard}></Deck>
      <Divider />
      <Board connections={connections} loading={connectionLoading} />
      <ClearButton onClick={handleClear}></ClearButton>
    </>
  );
};
