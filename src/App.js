import React from 'react';
import './App.css';
import { AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from './stylesApp';
import CardListApp from '../src/components/CarListApp/CardListApp'

function App() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.menu} position="fixed">
        <Toolbar >Lista de Tarefas</Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <CardListApp></CardListApp>
    </React.Fragment>
  )
};

export default App;
