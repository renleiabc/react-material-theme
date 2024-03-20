import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, TextField, Button, Box, Typography } from '@mui/material';
import type { SxProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const paperStyle: SxProps = {
    p: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (name == '') {
      setEmailError(true);
    }
    if (password == '') {
      setPasswordError(true);
    }

    if (name && password) {
      console.log(name, password);
      localStorage.setItem('token', name);
      navigate('/', { replace: true });
    }
  };
  return (
    <Paper sx={paperStyle}>
      <Box>
        <Typography variant="h6" textAlign="center" mb={2}>
          {t('login')}
        </Typography>
        <TextField
          label="Name"
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="off"
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={name}
          error={emailError}
          helperText="Input name"
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="off"
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
          helperText="Input password"
        />
        <Button variant="outlined" color="secondary" onClick={handleSubmit}>
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
