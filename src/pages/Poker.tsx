import Divider from '@mui/material/Divider';
import { FC, useCallback, useState, useEffect } from 'react';

import { updateConnection } from '@/api';
import { Board } from '@/components/molecules/Board';
import { ClearButton } from '@/components/molecules/ClearButton';
import { Deck } from '@/components/molecules/Deck';
import { useWebSocketContext } from '@/providers/SocketProvider';
import { ConnectionType, MessageType } from '@/type';

export const Poker: FC = () => {
  const { socket } = useWebSocketContext();
  const [connectionId, setConnectionId] = useState<string>();
  const [connections, setConnections] = useState<Array<ConnectionType>>([]);
  const [bet, setBet] = useState<number | string | undefined>();

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onopen = async () => {
      socket.send(JSON.stringify({ action: 'update', data: '' }));
    };

    socket.onmessage = async (e) => {
      const data: MessageType = JSON.parse(e.data);
      setConnectionId(data.connectionId);
      setConnections(data.connections);
    };
  }, [setConnections, socket]);

  const handleSelectCard = useCallback(
    async (num: number | string) => {
      setBet(num);
      await updateConnection(connectionId, { value: num });
      socket?.send(JSON.stringify({ action: 'update', data: '' }));
    },
    [connectionId, socket]
  );

  const handleClear = useCallback(() => {
    setBet(undefined);
  }, []);

  return (
    <>
      <Deck bet={bet} onCardClick={handleSelectCard}></Deck>
      <Divider />
      <Board connectionId={connectionId} connections={connections} />
      <ClearButton onClick={handleClear}></ClearButton>
    </>
  );
};
