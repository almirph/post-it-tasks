import { IconButton } from '@material-ui/core'
import React, { useContext } from 'react'
import CardApp from '../CardApp/CardApp'
import { useStyles } from './styles'
import AddIcon from '@material-ui/icons/Add'
import { CardContext } from '../../contexts.js/CardContext'

export default function CardListApp() {
    const classes = useStyles()

    const { cards, addCard } = useContext(CardContext)

    const addClick = () => {
        addCard({ title: 'Título', description: 'Descrição' })
    }

    return (
        <div className={classes.container}>
            {cards.map((card) => (
                <div key={card.id} className={classes.wrapper}>
                    <CardApp card={card}></CardApp>
                </div>
            ))}
            <div className={classes.wraper}>
                <IconButton onClick={() => addClick()}>
                    <AddIcon className={classes.addIcon}></AddIcon>
                </IconButton>
            </div>
        </div>
    )
}
