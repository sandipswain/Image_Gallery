import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import shape from "@material-ui/core/styles/shape";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#fedede"
    },
    secondary: { main: "#f44336" }
  },
  typography: {
    fontFamily: "Nunito",
    fontWeightBold: "700",
    body2: {
      fontFamily: "Comic Sans MS",
      fontSize: "1rem"
    }
  },
  shape: {
    borderRadius: 20
  }
});
