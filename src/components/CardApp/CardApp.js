import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'
import { CardContext } from '../../contexts.js/CardContext'
import { SwatchesPicker } from 'react-color'
import PaletteIcon from '@material-ui/icons/Palette'
import DeleteIcon from '@material-ui/icons/Delete'
import { Zoom } from '@material-ui/core'

function CardApp({ card }) {
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [cardIn, setCardIn] = useState(true)

    const colorPickRef = useRef(null)

    const { updateCard, deleteCard } = useContext(CardContext)

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])

    const handleClick = (e) => {
        if (colorPickRef.current.contains(e.target)) {
            return
        }
        setShowColorPicker(false)
    }

    const classes = useStyles({
        displayColorPicker: showColorPicker,
        color: card.color,
    })

    const onChangeTitle = (value) => {
        updateCard({ ...card, title: value })
    }

    const onChangeDescription = (value) => {
        updateCard({ ...card, description: value })
    }

    const onChangeColor = ({ hex }) => {
        updateCard({ ...card, color: hex })
    }

    const onClickDelete = () => {
        setCardIn(false)
        setTimeout(() => deleteCard(card.id), 200)
    }

    const onClickShowColorPicker = () => {
        setShowColorPicker(!showColorPicker)
    }

    return (
        <div className={classes.cardWrapper}>
            <Zoom in={cardIn} timeout={200}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography>
                            <input
                                className={classes.textTitle}
                                type="text"
                                defaultValue={card?.title}
                                onBlur={(event) =>
                                    onChangeTitle(event.target.value)
                                }
                            ></input>
                            <PaletteIcon
                                className={classes.cardIcon}
                                onClick={() => onClickShowColorPicker()}
                            ></PaletteIcon>
                            <DeleteIcon
                                className={classes.cardIcon}
                                onClick={() => onClickDelete()}
                            ></DeleteIcon>
                        </Typography>
                        <Typography>
                            <textarea
                                className={classes.textArea}
                                defaultValue={card?.description}
                                onBlur={(event) =>
                                    onChangeDescription(event.target.value)
                                }
                            ></textarea>
                        </Typography>
                    </CardContent>
                </Card>
            </Zoom>
            <div ref={colorPickRef}>
                <SwatchesPicker
                    className={classes.colorPicker}
                    color={card.color}
                    onChange={(value) => onChangeColor(value)}
                ></SwatchesPicker>
            </div>
        </div>
    )
}

function areEqual(props, prevProps) {
    return (
        props?.card?.description === prevProps?.card?.description &&
        props?.card?.title === prevProps?.card?.title &&
        props?.card?.color === prevProps?.card?.color
    )
}

export default memo(CardApp, areEqual)
