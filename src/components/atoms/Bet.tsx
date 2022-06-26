import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

type Props = {
  connection: { connectionId: string };
  myself: boolean;
};

export const Bet: FC<Props> = ({ connection, myself }: Props) => {
  console.log(connection, myself);
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h4">{`?`}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
