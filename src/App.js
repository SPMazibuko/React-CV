import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    align: 'center',
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 30,
    //paddingBottom: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: '#FFFFFF',
    paddingLeft: 30,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={1}
          style={{height:"150px"}}>
          <Grid item xs={5} >
            <Paper className={classes.paper} id="left">
              <div id="image" align='center'>
              <Avatar alt="Sifiso Mazibuko" src="https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.18169-9/983851_986869421386358_1963716742153717981_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_eui2=AeEuJv5NA1-wZqL0DHp5ozEC8mcasgTiXnvyZxqyBOJee4JpRxRSEQkVTitc2WUZBkRCJcTYGI3ayu0f99g2laS9&_nc_ohc=mOtL6h6zOPgAX_Dse-Y&_nc_ht=scontent.fjnb11-1.fna&oh=69ac49152f44043e5ca6b00458d1abf2&oe=60ED5330" className={classes.large}/>
              <Typography></Typography>
              
              </div>

              <div textAlign="left" id="contact">
              <h4>CONTACT INFO</h4>
              <hr style={{width:"90%",textAlign:"left",marginLeft:"0"}}/>
              <List >
      <ListItem>
      
          
          <EmailRoundedIcon fontSize="small"/>
         
     
        <ListItemText primary="spmazibuko07@gmail.com"/>
      </ListItem>
      <ListItem>
        
     
            <PhoneAndroidRoundedIcon fontSize="small"/>
        
     
        <ListItemText primary="068-028-7251" />
      </ListItem>
      <ListItem>
       
  
            <LocationOnRoundedIcon fontSize="small"/>
      
        
        <ListItemText primary="153 Troye Street, Sunnyside
Pretoria, 0002" secondary="" />
      </ListItem>
    </List>

    <h4>EDUCATION</h4>
    <hr style={{width:"90%",textAlign:"center",marginLeft:"0"}}/>
              </div>

              <div id="Education" textAlign="left">
              <p><b>Matric (Grade12)</b><br/>
              Indonsa High School, 2006 - 2010" </p>
          <p>
            <b>Mobile Applications Development</b><br/>Amajuba College, 2011 - 2013<br/></p>
            <p>
            <b>N.Dip Engineering computer Systems</b><br/> Tshwane University of Technology, 2017 - 2020
          </p>
      </div>
      <div>
      <h4>REFERENCE</h4>
      <hr style={{width:"90%",textAlign:"left",marginLeft:"0"}}/>
      <p><b>Mr Tsepo Moshabane</b><br/>
          Ex-Codetribe Intern </p>
          <p>
            <b>Email:</b> tshepomoshabane3@gmail.com<br/>
            <b>Mobile:</b> 071-822-2858
          </p>
          <List className={classes.root}>
      <ListItem>
        <ListItemText primary="" secondary="" />
      </ListItem>
      <ListItem>
        <ListItemText primary="" secondary="" />
      </ListItem>
      <ListItem>
        <ListItemText primary="" secondary="" />
      </ListItem>
      <ListItem>
        <ListItemText primary="" secondary="" />
      </ListItem>
      <ListItem>
        <ListItemText primary="" secondary="" />
      </ListItem>
      </List>

             </div> 
            </Paper>
          </Grid>
          <Grid item xs={7}> 
            <Paper style={{textAlign: 'center', color: '#000000', padding: '20px'}} id="header" elevation={0} >
              <Typography variant="h3">Sifiso P Mazibuko</Typography>
              <hr style={{width:"90%",textAlign:"left",marginLeft:"20px"}}/>
              <h3>Computer Systems Engineer.</h3>
            </Paper>
            <Grid item xs={12}>
            <Box p={2} bgcolor="background.paper">
            <Paper  id="right" elevation={0} >
                <div textAlign="left" id="Employment">
                  <h3>Employment History</h3>
                  <hr style={{width:"100%",textAlign:"left",marginLeft:"0%"}}/>
                  <p><strong>COMPANY:</strong> OK FURNITURES. <br/><strong>POSITION:</strong> Stock Clerk. 
<br/><strong>PERIOD:</strong> 02/2014 ??? 01/2017.<br/>    
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
                  <hr style={{width:"100%",textAlign:"left",marginLeft:"0%"}}/>
                  <p>These are some of the projects I have created so far, and most of them are not online. Please contact me if you need to see more of my projects.

                  <ul>
    <li>
    <a href = "https://codepen.io/spmazibuko/full/ZELyOVY"> Student Resident Survey </a></li>
    <li><a href="https://codepen.io/spmazibuko/full/poRrPoN" >
    Product Landing
      </a></li>
    <li><a href="https://codepen.io/spmazibuko/full/vYgeWNE" >
    Technical Documentation
      </a></li>
  </ul> 
                  </p>
                </div>

                <div id="skills">
                  <h3>skills</h3>
                  <hr style={{width:"100%",textAlign:"center",marginLeft:"0"}}/>

                  
                 <p> <ul style={{display:'flex'}}>
    <li><h4>Microsoft Office package:</h4>
      Microsoft Word, Microsoft Excel, Microsoft Access, Microsoft Visio.</li>
    <li><h4>Programming:</h4>
    C++, SQL, HTML5,Java, Python, (PLC)Ladder Logic, VHDL, Arduino, Processing, Assembler, Android, CSS3, Ionic 4. 
    </li>
 
  </ul> 
  <ul style={{display:'flex'}}>
  <li><h4>Database operations:</h4>
    Oracle 8i, SQL Server 2005, MySQL.  
    </li>
    <li><h4>Assembling Components.</h4></li>
    </ul>
                 </p>
                </div>
                <div id="PersonalAttributes">
                    <h3>Personal Attributes</h3>
                    <hr style={{width:"100%",textAlign:"left",marginLeft:"0%"}}/>
                    <p>
                    Hardworking, Dedicated, Team Player, Responsible, Eager & fast learner, Natural leader.
                    <br/>
                    <br/>
                    </p>

                </div>
            </Paper>
            </Box>
          </Grid>
          </Grid>
        </Grid>
      
    </div>

  );
}
