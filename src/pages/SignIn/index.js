import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
  },
  left: {
    background: 'blue',
    flexBasis: '58%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  righ: {
    background: 'yellow',
    flexBasis: '42%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '64px 32px',
    alignItems: 'center',
  },
});

function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
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
      </div>

      <div className={classes.righ}>
        <form className={classes.form}>
          <h4>Acesso</h4>

          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
