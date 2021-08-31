import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const CardContext = createContext()

const CardContextProvider = (props) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(_getCardsFromLocalStorage())
    }, [])

    useEffect(() => {
        window.localStorage.setItem('cards', JSON.stringify(cards))
    }, [cards])

    const addCard = (newCard) => {
        setCards([...cards, { ...newCard, id: _uniqueID(), color: '#e91e63' }])
    }

    const deleteCard = (cardId) => {
        const newCards = cards
        newCards.splice(
            newCards.findIndex((item) => item.id === cardId),
            1
        )
        setCards([...newCards])
    }

    const updateCard = (newCard) => {
        const newCards = cards
        newCards.splice(
            newCards.findIndex((item) => item.id === newCard.id),
            1,
            newCard
        )
        setCards([...newCards])
    }

    const _getCardsFromLocalStorage = () => {
        return window.localStorage.getItem('cards')
            ? JSON.parse(window.localStorage.getItem('cards'))
            : []
    }

    const _uniqueID = () => {
        return uuidv4()
    }

    return (
        <CardContext.Provider
            value={{ cards, addCard, updateCard, deleteCard }}
        >
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider
