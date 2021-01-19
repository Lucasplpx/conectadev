import {
  Avatar,
  Button,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Grid, Box } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../actions/accountActions';

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

function SignUp() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          <Typography variant="h5">Registrar</Typography>

          <Formik
            initialValues={{ fullName: '', email: '', password: '' }}
            validationSchema={Yup.object().shape({
              fullName: Yup.string()
                .max(255)
                .required('Favor informar o nome completo.'),
              email: Yup.string()
                .email('Favor informar um email válido')
                .max(255)
                .required('Favor informar o email'),
              password: Yup.string()
                .max(255)
                .required('Favor informar o password'),
            })}
            onSubmit={async (
              values,
              { setErros, setStatus, setSubmitting }
            ) => {
              try {
                dispatch(
                  signUp(values.fullName, values.email, values.password)
                );
                navigate('/');
              } catch (error) {
                const message =
                  (error.response && error.response.data.message) ||
                  'Algo não está certo!';
                setStatus({ success: false });
                setErros({ submit: message });
                setSubmitting(false);
              }
            }}
          >
            {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
              <form noValidate className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="fullName"
                  label="Nome completo"
                  name="fullName"
                  autoComplete="fullName"
                  autoFocus
                  error={Boolean(errors.fullName)}
                  value={values.fullName}
                  onChange={handleChange}
                  helperText={errors.fullName}
                />
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
                  error={Boolean(errors.email)}
                  value={values.email}
                  onChange={handleChange}
                  helperText={errors.email}
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
                  error={Boolean(errors.password)}
                  value={values.password}
                  onChange={handleChange}
                  helperText={errors.password}
                />

                <Button
                  className={classes.button}
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Registrar
                </Button>

                {errors.submit && (
                  <FormHelperText error>{errors.submit}</FormHelperText>
                )}

                <Grid container>
                  <Grid item>
                    <Link>Já possui uma conta? Clique aqui</Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>

          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUp;
