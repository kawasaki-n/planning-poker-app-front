import Button from '@mui/material/Button';
import { FC } from 'react';

type ClearButtonProps = {
  onClick: () => void;
};

export const ClearButton: FC<ClearButtonProps> = ({ onClick }: ClearButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{ width: '100%', margin: 3, position: 'absolute', bottom: 0 }}
      onClick={onClick}
    >
      クリア
    </Button>
  );
};
