import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            color="inherit"
            variant="h5"
            component={Link}
            to="/"
            noWrap
            sx={{ textDecoration: 'none', flexGrow: 1 }}
          >
            プランニングポーカー
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
