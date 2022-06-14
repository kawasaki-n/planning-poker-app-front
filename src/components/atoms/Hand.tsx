import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

const selectColor = '#FFF450';

type CardProps = {
  num: number | string;
  bet: number | string | undefined;
  onCardClick: (num: number | string) => void;
};

export const Hand: FC<CardProps> = ({ num, bet, onCardClick }: CardProps) => {
  return (
    <Box>
      <Card
        onClick={() => onCardClick(num)}
        sx={{ backgroundColor: num === bet ? selectColor : '' }}
      >
        <CardActionArea>
          <CardContent>
            <Typography variant="h4">{num}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
