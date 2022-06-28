import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

type WebSocketContextType = {
  socket?: WebSocket;
};

const WebSocketContext = createContext<WebSocketContextType>({});

export const useWebSocketContext = (): WebSocketContextType => useContext(WebSocketContext);

type SocketProviderProps = {
  children: ReactNode;
};

export const SocketProvider: FC<SocketProviderProps> = ({ children }: SocketProviderProps) => {
  const [webSocket, setWebSocket] = useState<WebSocket>();

  useEffect(() => {
    if (!process.env.REACT_APP_WEB_SOCKET_URL) throw new Error('web socket url is not found!');
    setWebSocket(new WebSocket(process.env.REACT_APP_WEB_SOCKET_URL));
  }, []);

  return (
    <WebSocketContext.Provider value={{ socket: webSocket }}>{children}</WebSocketContext.Provider>
  );
};
