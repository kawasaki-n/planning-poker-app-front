import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import { FC } from 'react';

import { Hand } from '../atoms/Hand';

type DeckProps = {
  onCardClick: (num: number | string) => void;
};

export const Deck: FC<DeckProps> = ({ onCardClick }: DeckProps) => {
  const nums = [1, 2, 3, 5, 8, 13, 21, '?', '☕'];
  return (
    <Container sx={{ width: '100%', marginY: 3 }}>
      <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
        {nums.map((num, i) => {
          return <Hand key={i} num={num} onCardClick={onCardClick} />;
        })}
      </Stack>
    </Container>
  );
};
