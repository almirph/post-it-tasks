import { makeStyles } from '@material-ui/core'
import { generateRandomColor } from '../../helpers/colorsHelper'

export const useStyles = makeStyles({
    addIcon: {
        fontSize: '100px',
        color: generateRandomColor(),
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'wrap',
        margin: '40px 0',
    },
    wrapper: {
        margin: '24px 24px',
    },
})
