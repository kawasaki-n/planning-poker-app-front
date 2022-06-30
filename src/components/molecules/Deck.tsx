import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import { FC } from 'react';

import { Hand } from '../atoms/Hand';

type DeckProps = {
  bet: number | string | undefined;
  onCardClick: (num: number | string) => void;
};

export const Deck: FC<DeckProps> = ({ bet, onCardClick }: DeckProps) => {
  const nums = [1, 2, 3, 5, 8, 13, 21, '☕'];
  return (
    <Container sx={{ width: '100%', marginY: 5 }}>
      <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
        {nums.map((num, i) => {
          return <Hand key={i} num={num} onCardClick={onCardClick} bet={bet} />;
        })}
      </Stack>
    </Container>
  );
};
