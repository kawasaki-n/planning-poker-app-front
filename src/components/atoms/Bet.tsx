import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { ConnectionType } from '@/type';

type Props = {
  connection: ConnectionType;
  myself: boolean;
};

export const Bet: FC<Props> = ({ connection }: Props) => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h4">{connection.value}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
