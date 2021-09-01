import React from 'react'
import './App.css'
import { AppBar, Toolbar } from '@material-ui/core'
import { useStyles } from './stylesApp'
import CardListApp from '../src/components/CarListApp/CardListApp'
import CardContextProvider from './contexts.js/CardContext'

function App() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <AppBar className={classes.menu} position="fixed">
                <Toolbar>Post-Its</Toolbar>
            </AppBar>
            <div className={classes.offset} />
            <CardContextProvider>
                <CardListApp></CardListApp>
            </CardContextProvider>
        </React.Fragment>
    )
}

export default App
