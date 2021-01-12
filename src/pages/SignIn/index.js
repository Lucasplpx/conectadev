import { Avatar, Button, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Box } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  image: {
    backgroundImage: 'url(/images/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(2, 4),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <a
        color="inherit"
        target="_blanck"
        href="https://github.com/Lucasplpx/conectadev"
      >
        Lucas Passos
      </a>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignIn() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        className={classes.image}
        md={7}
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography style={{ color: '#FFF', fontSize: 35, lineHeight: '45px' }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de software!
          </strong>
        </Typography>
        <Typography
          style={{
            color: 'rgba(255,255,255,0.7)',
            marginTop: 30,
            fontSize: 15,
            lineHeight: '30px',
          }}
        >
          <strong>
            Compartilhe seu conhecimento com toda nossa rede de desenvolvedores
            de software.
          </strong>
        </Typography>
      </Grid>

      <Grid md={5} item>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Acesso</Typography>

          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Senha"
              name="password"
              type="password"
              autoComplete="current-password"
            />

            <Button
              className={classes.button}
              fullWidth
              variant="contained"
              color="primary"
            >
              Entrar
            </Button>

            <Grid container>
              <Grid item>
                <Link>Esqueceu sua senha?</Link>
              </Grid>
              <Grid item>
                <Link>Não tem um conta? Registra-se</Link>
              </Grid>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
