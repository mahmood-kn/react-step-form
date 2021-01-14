import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../customize-mui/customizeMui';

const FormUserDetails = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar className={classes.orange}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              edge='start'
              aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h5' className={classes.title}>
              Success
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ marginTop: '7rem' }}>
        <Typography variant='h3' style={{ marginBottom: '1rem' }}>
          Thank You For Submition
        </Typography>
        <Typography variant='body1'>
          You will get an email with further instruction
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default FormUserDetails;
