import React from 'react';
import CardApp from '../CardApp/CardApp';
import { useStyles } from './styles';



const cards = [1,2,3,4,5,6,7,8,9]

export default function CardListApp(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.container}>
          {cards.map(() => <div className={classes.wraper}><CardApp></CardApp></div> )}
      </div>
    );
  }

