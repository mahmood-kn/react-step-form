import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export const inputColor = createMuiTheme({
  palette: {
    primary: {
      main: '#fc7419',
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
  orange: {
    backgroundColor: '#fc7419',
  },
  mtFirst: {
    marginTop: '6rem',
  },
  mt: {
    marginTop: '1.5rem',
  },
  list: {
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: '1.5rem',
    marginRight: '0.5rem',
    color: 'white',
  },
  buttonBack: {
    marginTop: '1.5rem',
    marginLeft: '0.5rem',
  },
}));
