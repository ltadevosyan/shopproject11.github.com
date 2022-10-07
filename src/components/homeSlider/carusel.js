import React from 'react';
import Carousel from 'react-material-ui-carousel';
/*import { Paper, Button } from '@mui/material';*/
import { Paper } from '@mui/material';
import classes from "./carusel.module.css";

function HomeSlider(props)
{
    var items = [
        {
            name: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600", 
        },
        {
            name: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        }
    ];

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        
    )
}

function Item(props)
{
    return (
        <Paper>
            <img className={classes.slideImage} src={props.item.name} alt = "slide"/>
        </Paper>
    )
}
export default HomeSlider;