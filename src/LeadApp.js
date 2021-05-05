import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'; 

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography';

import LeadAppDesktop from './LeadAppDesktop';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    padding: theme.spacing(4),
    backgroundColor: '#eee',

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  vendorsList: {
    backgroundColor: '#F7F7F7',
  },
  applicationArea: {
    backgroundColor: '#f1f1f1',
  },
}));
 
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#339CFE',
      main: '#0169CA',
      dark: '#0054A1',
    },
    secondary: {
      main: '#20B0A7',

    }
  },
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: '#20B0A7'
      }
    },
    MuiTab: {
      root: {
        "&:hover": {
          backgroundColor: '#0054A1',
          color: '#ffffff',
          opacity: 1
        }
      },
      textColorInherit: {
        backgroundColor: '#0054A1',
        color: '#ffffff',
        "&:hover": {
          backgroundColor: '#20B0A7',
          color: '#ffffff'
        }
      }
    }
  }
});

function LeadApp() {
  const classes = useStyles();
   
  return ( 
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl" className={classes.root}>
      <CssBaseline />
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={0}>
          <Grid xs={12}>
            <Typography component='h5' variant='h5'>Lead Desktop view</Typography>
              <LeadAppDesktop />         
          </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
  );
}

export default LeadApp;
