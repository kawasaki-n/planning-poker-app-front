import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

type CardProps = {
  num: number | string;
  onCardClick: (num: number | string) => void;
};

export const Hand: FC<CardProps> = ({ num, onCardClick }: CardProps) => {
  return (
    <Box>
      <Card onClick={() => onCardClick(num)}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h4">{num}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
