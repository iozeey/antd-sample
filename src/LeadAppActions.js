import React from 'react';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 
import SendIcon from '@material-ui/icons/Send';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ForwardIcon from '@material-ui/icons/Forward';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import WarningIcon from '@material-ui/icons/Warning';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import TextField from '@material-ui/core/TextField';

function AccordionDetailInner() {
    return (
        <Grid  container direction="row" justify="center" alignItems="flex-start" spacing={1}>
        <Grid item xs={6}>
            <List aria-label="contacts">
                <ListItem className="active">
                    <ListItemIcon>
                        <AssignmentIndIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Kaman Branch TX 93"
                        secondary="Default Contact"
                    />
                </ListItem>                                                     
            </List>
        </Grid >
        <Grid item xs={6}>
            <List aria-label="contacts">
                <ListItem>
                    <ListItemIcon>
                        <AssignmentIndIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Kaman Branch TX 93"
                        secondary="twilson@juice4u.com"
                    />
                </ListItem>                                                     
            </List>
        </Grid> 

        <Grid item xs={12}>
            <TextField
                style={{ backgroundColor: '#fff'}}
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue="Write additional comments here"
                variant="outlined"
                fullWidth
            />
        </Grid> 
    </Grid >
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }

  
const useStyles = makeStyles((theme) => ({
    leadAction: {
        '& > header': {
            padding: theme.spacing(2) ,
        },
        '& > header button': {
            backgroundColor: '#3f51b5',
            color: '#fff',
            minWidth: '16.666667%',
        },
        
    }, 
    leadActionPanel: {
        backgroundColor: '#f5f5f5',
        margin: theme.spacing(2, 0) ,
        '& > div': {
            padding: theme.spacing(2) ,      
        },
    },
    ActionCardHeader: {
        borderBottom: '1px solid #ccc',
    },
    actionHeader: {
        '& h6 > button': {
            margin: theme.spacing(0, 0, 0, 2) ,
          },
      },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    vSpacing: {
        margin: theme.spacing(4, 0),
      },
    AccordianColor: {
        backgroundColor: '#eee',
        margin: theme.spacing(0, 0, 2, 0) ,
    },
    contactDetail: {
        '& li': {
            backgroundColor: '#7682C8',
            color: '#fff',
            borderRadius: '4px',
        },
        '& li.active': {
            backgroundColor: '#3f51b5',
            color: '#fff',
            borderRadius: '4px',
        },
        '& p': {
            color: '#ccc',
        },
        '& svg': {
            color: '#fff',
        },
      }, 
  }));
 
function Actions() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChangeTabs = (event, newValue) => {
      setValue(newValue);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return ( 
            <Card className={classes.ActionCard}>
                <CardHeader className={classes.ActionCardHeader}             
                    title="Lead Action"
                    subheader=""
                /> 
                <CardContent className={classes.ActionCardContent}  >
                    <Grid container direction="row" spacing={2} justify="center" alignItems="flex-start">
                        <Grid item xs={12}>
                            <Card className={classes.root}>
                                <CardContent>
                                <div className={classes.vSpacing}></div>

                                <div className={classes.leadAction}>
                                    <AppBar position="static" color="default">
                                        <Tabs
                                        value={value}
                                        onChange={handleChangeTabs}
                                        variant="scrollable"
                                        scrollButtons="off"
                                        aria-label="scrollable prevent tabs example"
                                        >
                                        <Tab icon={<ForwardIcon />} label="Forward" aria-label="phone" {...a11yProps(0)} />
                                        <Tab icon={<NotificationsActiveIcon />} label="Open" aria-label="favorite" {...a11yProps(1)} />
                                        <Tab icon={<AutorenewIcon />} label="Close" aria-label="person" {...a11yProps(2)} />
                                        <Tab icon={<WarningIcon />} label="Not My Lead" aria-label="help" {...a11yProps(3)} />
                                        <Tab icon={<ChatBubbleIcon />} label="Chat" aria-label="shopping" {...a11yProps(4)} />
                                        <Tab icon={<HeadsetMicIcon />} label="Support" aria-label="up" {...a11yProps(5)} />
                                        </Tabs>
                                    </AppBar>
                                    <TabPanel className={classes.leadActionPanel} value={value} index={0}>
                                        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                            <Grid item xs={3}>
                                                <Button fullWidth variant="contained" color="primary" size="small"  startIcon={<SendIcon fontSize="small" />}>All Distributors</Button>
                                            </Grid >
                                            <Grid item xs={3}>
                                                <Button fullWidth variant="contained" color="primary" size="small" startIcon={<SendIcon fontSize="small" />}>Other TM</Button>
                                            </Grid >
                                            <Grid item xs={3}>
                                                <Button fullWidth variant="contained" color="primary" size="small" startIcon={<AddCircleIcon fontSize="small" />}>TM IBU</Button>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Button fullWidth variant="contained" color="primary" size="small" startIcon={<EditIcon fontSize="small" />}>Linear Specialist</Button>
                                            </Grid>
                                        </Grid >
                                    </TabPanel>
                                    <TabPanel className={classes.leadActionPanel} value={value} index={1}>
                                        Item Two 
                                    </TabPanel>
                                    <TabPanel className={classes.leadActionPanel} value={value} index={2}>
                                        Item Three
                                    </TabPanel>
                                    <TabPanel className={classes.leadActionPanel} value={value} index={3}>
                                        Item Four
                                    </TabPanel>
                                    <TabPanel className={classes.leadActionPanel} value={value} index={4}>
                                        Item Five
                                    </TabPanel>
                                    <TabPanel className={classes.leadActionPanel} value={value} index={5}>
                                        Item Six
                                    </TabPanel> 

                                </div >
                                <div className={classes.vSpacing}></div>
                                
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.AccordianColor}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1ah-content"
                                        id="panel1ah-header"
                                        >
                                            <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                                <Grid item xs={6}>
                                                    <Typography display="block" variant="subtitle2" nowrap={true}>Kaman Industries Inc. <Button variant="contained" color="primary" size="small">Tier 1</Button></Typography>
                                                </Grid >
                                                <Grid item xs={3}>
                                                    <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                                                </Grid>
                                                <Grid item xs={3}>                                                    
                                                    <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                                                </Grid>
                                            </Grid >
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.contactDetail} >
                                            <AccordionDetailInner />
                                        </AccordionDetails>
                                    </Accordion> 
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.AccordianColor}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2ah-content"
                                        id="panel2ah-header"
                                        >
                                            <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                                <Grid item xs={6}>
                                                    <Typography display="block" variant="subtitle2" nowrap={true}>Purvis Industries <Button variant="contained" color="primary" size="small">Tier 1</Button></Typography>
                                                </Grid >
                                                <Grid item xs={3}>
                                                    <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                                                </Grid>
                                                <Grid item xs={3}>                                                    
                                                    <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                                                </Grid>
                                            </Grid >
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.contactDetail} >
                                            <AccordionDetailInner />
                                        </AccordionDetails>
                                    </Accordion> 
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.AccordianColor}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3ah-content"
                                        id="panel3ah-header"
                                        >
                                            <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                                <Grid item xs={6}>
                                                    <Typography display="block" variant="subtitle2" nowrap={true}>B & D Industrial <Button variant="contained" color="secondary" size="small">Tier 2</Button></Typography>
                                                </Grid >
                                                <Grid item xs={3}>
                                                    <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                                                </Grid>
                                                <Grid item xs={3}>                                                    
                                                    <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                                                </Grid>
                                            </Grid >
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.contactDetail} >
                                            <AccordionDetailInner />
                                        </AccordionDetails>
                                    </Accordion> 
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.AccordianColor}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4ah-content"
                                        id="panel4ah-header"
                                        >
                                            <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                                <Grid item xs={6}>
                                                    <Typography display="block" variant="subtitle2" nowrap={true}>Womack Machine <Button variant="contained" color="secondary" size="small">Tier 2</Button></Typography>
                                                </Grid >
                                                <Grid item xs={3}>
                                                    <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                                                </Grid>
                                                <Grid item xs={3}>                                                    
                                                    <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                                                </Grid>
                                            </Grid >
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.contactDetail} >
                                            <AccordionDetailInner />
                                        </AccordionDetails>
                                    </Accordion> 
                                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.AccordianColor}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel5ah-content"
                                        id="panel5ah-header"
                                        >
                                            <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                                <Grid item xs={6}>
                                                    <Typography display="block" variant="subtitle2" nowrap={true}>Hydraquip <Button variant="contained" color="primary" size="small">Tier 1</Button></Typography>
                                                </Grid >
                                                <Grid item xs={3}>
                                                    <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                                                </Grid>
                                                <Grid item xs={3}>                                                    
                                                    <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                                                </Grid>
                                            </Grid >
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.contactDetail} >
                                            <AccordionDetailInner />
                                        </AccordionDetails>
                                    </Accordion> 
                                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className={classes.AccordianColor}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel6ah-content"
                                        id="panel6ah-header"
                                        >
                                            <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                                <Grid item xs={6}>
                                                    <Typography display="block" variant="subtitle2" nowrap={true}>Texas Instruments <Button variant="contained" color="secondary" size="small">Tier 2</Button></Typography>
                                                </Grid >
                                                <Grid item xs={3}>
                                                    <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                                                </Grid>
                                                <Grid item xs={3}>                                                    
                                                    <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                                                </Grid>
                                            </Grid >
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.contactDetail} >
                                            <AccordionDetailInner />
                                        </AccordionDetails>
                                    </Accordion> 
                                    <div className={classes.vSpacing}></div>
                                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                        <Grid item xs={6}>
                                            <Button fullWidth variant="contained" color="primary" startIcon={<SendIcon fontSize="small" />}>Submit Lead</Button>
                                        </Grid >
                                        <Grid item xs={3}>
                                            <Button fullWidth variant="contained" color="primary" startIcon={<AddCircleIcon fontSize="small" />}>Add Contact</Button>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button fullWidth variant="contained" color="primary" startIcon={<EditIcon fontSize="small" />}>Edit Contact</Button>
                                        </Grid>
                                    </Grid >
                   
                                </CardContent>
                            </Card>
                        </Grid>                                            
                    </Grid>                      
                </CardContent>
            </Card>
    )
}
export default Actions;