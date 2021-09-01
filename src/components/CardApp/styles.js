import { makeStyles } from '@material-ui/styles'
import { generateRandomColor } from '../../helpers/colorsHelper'

export const useStyles = makeStyles({
    cardWrapper: {
        position: 'relative',
    },
    root: {
        minWidth: 275,
        backgroundColor: ({ color }) => color,
    },
    textTitle: {
        backgroundColor: 'transparent',
        border: 'none',
        resize: 'none',
        outlineWidth: 0,
        fontSize: '18px',
    },
    textArea: {
        width: '240px',
        height: '180px',
        fontSize: '14px',
        backgroundColor: 'transparent',
        border: 'none',
        resize: 'none',
        outlineWidth: 0,
    },
    cardIcon: {
        cursor: 'pointer',
        transition: 'transform 0.15s ease-in-out',
        color: '#000000',
        '&:hover': {
            transform: 'scale3d(1.5, 1.5, 1)',
            color: generateRandomColor(),
        },
    },
    colorPicker: {
        position: 'absolute',
        top: '45px',
        left: '0px',
        zIndex: '1',
        display: ({ displayColorPicker }) =>
            displayColorPicker ? 'block' : 'none',
    },
})
