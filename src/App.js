import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'; 

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'; 

import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
 

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Vendor from './Vendor';


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
 

function App() {
  const classes = useStyles();
  

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return ( 
    <Container maxWidth="xl" className={classes.root}>
      <CssBaseline />
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={0}>
          <Grid xs={12}>
            <Typography component='h5' variant='h5'>List of Vandors</Typography>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                  <Grid item>       
                    <Avatar variant="square">
                      <ImageIcon />
                    </Avatar>
                  </Grid>
                  <Grid item> 
                    <Typography className={classes.heading}>Apple Store</Typography>
                    <Typography className={classes.secondaryHeading}>4 Apps | Inactive</Typography>
                  </Grid>
                </Grid>

              </AccordionSummary>
              <AccordionDetails>
                <Vendor />
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                  <Grid item>       
                    <Avatar variant="square">
                      <ImageIcon />
                    </Avatar>
                  </Grid>
                  <Grid item> 
                    <Typography className={classes.heading}>Cloudeagle</Typography>
                    <Typography className={classes.secondaryHeading}>1 Apps | Active</Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Vendor />
              </AccordionDetails>
            </Accordion>             
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
