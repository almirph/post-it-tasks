import { makeStyles } from '@material-ui/styles'

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
    cardIcon: { cursor: 'pointer', color: '#ffffff' },
    colorPicker: {
        position: 'absolute',
        top: '45px',
        left: '240px',
        zIndex: '1',
        display: ({ displayColorPicker }) =>
            displayColorPicker ? 'block' : 'none',
    },
})
