import Divider from '@mui/material/Divider';
import { FC, useCallback, useState } from 'react';

import { ClearButton } from '@/components/molecules/ClearButton';
import { Deck } from '@/components/molecules/Deck';

export const Poker: FC = () => {
  const [bet, setBet] = useState<number | string>();

  const handleSelectCard = useCallback((num: number | string) => {
    setBet(num);
  }, []);

  const handleClear = useCallback(() => {
    setBet(undefined);
  }, []);

  return (
    <>
      <Deck bet={bet} onCardClick={handleSelectCard}></Deck>
      <Divider />
      <ClearButton onClick={handleClear}></ClearButton>
    </>
  );
};
