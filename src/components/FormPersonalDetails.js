import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useStyles, inputColor } from '../customize-mui/customizeMui';

const FormUserDetails = ({ values, nextStep, handleChange, prevStep }) => {
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
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Container maxWidth='xs'>
        <ThemeProvider theme={inputColor}>
          <TextField
            className={classes.mtFirst}
            label='Occupation'
            variant='outlined'
            fullWidth
            size='small'
            defaultValue={values.occupation}
            onChange={handleChange('occupation')}
          />
          <TextField
            className={classes.mt}
            label='City'
            variant='outlined'
            fullWidth
            size='small'
            defaultValue={values.city}
            onChange={handleChange('city')}
          />
          <TextField
            className={classes.mt}
            label='Bio'
            variant='outlined'
            fullWidth
            size='small'
            defaultValue={values.bio}
            onChange={handleChange('bio')}
          />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            size='large'
            onClick={nextStep}>
            Continue
          </Button>
          <Button
            variant='contained'
            className={classes.buttonBack}
            size='large'
            onClick={prevStep}>
            Back
          </Button>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
};

export default FormUserDetails;
