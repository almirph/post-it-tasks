import { makeStyles } from "@material-ui/core";
import { generateRandomColor } from "./colors";

export const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menu: {
        backgroundColor: generateRandomColor()
    }
  }))