import { makeStyles } from "@material-ui/styles";
import { generateRandomColor } from "../../colors";

export const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: generateRandomColor()
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    }
  });
  