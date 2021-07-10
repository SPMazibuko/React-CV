import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import Link from '@material-ui/core/Link';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    textAlign: 'left',
  },
}));

export default function App() {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();


  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}> 
            <Paper className={classes.paper}  id="header">
              <Typography variant="h3">Sifiso P Mazibuko</Typography>
              <h3>Computer Systems Engineer.</h3>
            </Paper>
          </Grid>

          <Grid item xs={5}>
            <Paper className={classes.paper} id="left">
              <div id="image">
              <Avatar alt="Sifiso Mazibuko" src="https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.18169-9/983851_986869421386358_1963716742153717981_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_eui2=AeEuJv5NA1-wZqL0DHp5ozEC8mcasgTiXnvyZxqyBOJee4JpRxRSEQkVTitc2WUZBkRCJcTYGI3ayu0f99g2laS9&_nc_ohc=mOtL6h6zOPgAX_Dse-Y&_nc_ht=scontent.fjnb11-1.fna&oh=69ac49152f44043e5ca6b00458d1abf2&oe=60ED5330" className={classes.large}/>
              <Typography></Typography>
              <h4>Contact info</h4>
              <Divider variant="middle" />
              </div>

              <div id="contact">
                
              <List >
      <ListItem >
        <ListItemAvatar >
          <Avatar className={classes.small}>
          <EmailRoundedIcon fontSize="small"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email"/>
      </ListItem>
      <ListItem>
        <ListItemText secondary="spmazibuko07@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.small}>
            <PhoneAndroidRoundedIcon fontSize="small"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="068-028-7251" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.small}>
            <LocationOnRoundedIcon fontSize="small"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary="153 Troye Street, Sunnyside
Pretoria, 0002" />
      </ListItem>
    </List>

    <h4>Education</h4>
              <Divider variant="middle" />
              </div>

              <div id="Education">
                <List className={classes.root}>
      <ListItem>
        <ListItemText primary="Matric (Grade12)" secondary="Indonsa High School, 2006 - 2010" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mobile Applications Development" secondary="Amajuba College, 2011 - 2013" />
      </ListItem>
      <ListItem>
        <ListItemText primary="N.Dip Engineering computer Systems" secondary="Tshwane University of Technology, 2017 - 2020" />
      </ListItem>
      </List>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={7}>
            <Paper  id="right">
                <div textAlign="left" id="Employment">
                  <h3>Employment History</h3>
                  <Divider variant="middle" />
                  <p><strong>COMPANY:</strong> OK FURNITURES. <br/><strong>POSITION:</strong> Stock Clerk. 
<br/><strong>PERIOD:</strong> 02/2014 – 01/2017.<br/>    
<strong>DUTIES & RESPONSIBILITIES:</strong><br/> 
	<ul>
    <li>Count Stock.</li>
    <li>Book Customer complaints/ damaged stock.</li>
    <li>Cash upliftment.</li>
    <li>Manage security and Receiving Clerks.</li>
  </ul> 
</p>
                </div>

                <div id="Projects">
                  <h3>Projects</h3>
                  <Divider variant="middle" />
                  <p>These are some of the projects I have created so far, and most of them are not online. Please contact me if you need to see more of my projects.

                  <ul>
    <li><Link href="https://codepen.io/spmazibuko/full/ZELyOVY" onClick={preventDefault}>
    Student Resident Survey
      </Link></li>
    <li><Link href="https://codepen.io/spmazibuko/full/poRrPoN" onClick={preventDefault}>
    Product Landing
      </Link></li>
    <li><Link href="https://codepen.io/spmazibuko/full/vYgeWNE" onClick={preventDefault}>
    Technical Documentation
      </Link></li>
  </ul> 
                  </p>
                </div>

                <div id="skills">
                  <h3>skills</h3>
                  <Divider variant="middle" />

                  
                 <p> <ul>
    <li><h5>Microsoft Office package:</h5>
      Microsoft Word, Microsoft Excel, Microsoft Access, Microsoft Visio.</li>
    <li><h5>Database operations:</h5>
    Oracle 8i, SQL Server 2005, MySQL.  
    </li>
    <li><h5>Programming:</h5>
    C++, SQL, HTML5,Java, Python, (PLC)Ladder Logic, VHDL, Arduino, Processing, Assembler, Android, CSS3, Ionic 4. 
    </li>
    <li><h5>Assembling Components.</h5></li>
  </ul> 
                 </p>
                </div>
                <div id="PersonalAttributes">
                    <h3>Personal Attributes</h3>
                    <Divider variant="middle" />
                    <p>
                    Hardworking, Dedicated, Team Player, Responsible, Eager & fast learner, Natural leader.
                    <br/>
                    <br/>
                    </p>

                </div>
            </Paper>
          </Grid>

        </Grid>
      
    </div>

  );
}
