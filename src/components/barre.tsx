import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { LanguesContext } from '../contexts/langues.context';
import { FormattedMessage } from 'react-intl';
export default function Barre() {
  const { locale, setLocale } = React.useContext(LanguesContext);

  function changeLangue(event: SelectChangeEvent<string>) {
    setLocale(event.target.value as string);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <FormattedMessage id="app.titre" />
          </Typography>
          <Select onChange={changeLangue} value={locale}>
            <MenuItem value="fr">Français</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
