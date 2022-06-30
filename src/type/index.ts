export type MessageType = {
  connectionId: string;
  connections: Array<ConnectionType>;
};

export type ConnectionType = {
  connectionId: string;
  value: string | undefined;
};
