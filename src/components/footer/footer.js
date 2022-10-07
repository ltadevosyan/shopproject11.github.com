import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import classes from "./footer.module.css";
import logo from "../../images/logo.png";
import pfone from "../../images/pfone.png";
import mail from "../../images/mail.png";
import {Routes} from "../../helping/routes";
import { NavLink} from "react-router-dom";


// import Item from '@mui/material/Item';
const Footer = ()=>{
    return(
        <Grid className={classes.backColor} container  spacing={2}>
            <Grid container alignItems="center" justifyContent="center" direction="row"  item xs={3} md={3}>
            <NavLink to = "homePage">
            <img  src={logo} alt="logo"/> 
            </NavLink>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" direction="row" item xs={6} md={6}>
            {Routes.map(link => {
            if(link.path === 'products/product/:id') return
                  return (
                      
                          <NavLink key = {link.path}
                               
                                  
                              to={link.path}
                          ><Button 
            color="inherit" 
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            {link.title}
          </Button></NavLink>
                    
                  )
              })}
            </Grid>
            <Grid container  direction="column" alignItems="center" justifyContent="center" item xs={3} md={3}>
                <h4>Contact To Us</h4>
                <div className={classes.flex}>
                    <img  src={mail} alt="mail"/>
                    <a href="mailto:aghasyanarshak@gmail.com" className={classes.link}>firstname lastname</a>
                </div>
                <div className={classes.flex}>
                    <img src={pfone} alt="phone"/>
                    <a href="tel:+37491(97-99-00)" className={classes.link}>+37491(97-99-00)</a>
                </div>
                
            </Grid>
            
        </Grid>
    )
}
export default Footer;