import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { FC, useCallback, useState } from 'react';

import { Deck } from '@/components/molecules/Deck';

export const Poker: FC = () => {
  const [bet, setBet] = useState<number | string>();

  const handleSelectCard = useCallback((num: number | string) => {
    setBet(num);
  }, []);

  return (
    <>
      <Deck onCardClick={handleSelectCard}></Deck>
      <Divider />
      <Typography>{bet}</Typography>
    </>
  );
};
