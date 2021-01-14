import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import { useStyles, inputColor } from '../customize-mui/customizeMui';

const FormUserDetails = ({ values, nextStep, prevStep }) => {
  const classes = useStyles();
  const { firstName, lastName, email, occupation, city, bio } = values;
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
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <ListItemText
                primary='First Name'
                secondary={firstName}
                style={{ textAlign: 'center' }}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText
                primary='Last Name'
                secondary={lastName}
                style={{ textAlign: 'center' }}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText
                primary='Email'
                secondary={email}
                style={{ textAlign: 'center' }}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText
                primary='Occupation'
                secondary={occupation}
                style={{ textAlign: 'center' }}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText
                primary='City'
                secondary={city}
                style={{ textAlign: 'center' }}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText
                primary='Bio'
                secondary={bio}
                style={{ textAlign: 'center' }}
              />
            </ListItem>
          </List>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            size='large'
            onClick={nextStep}>
            Confirm & Continue
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
