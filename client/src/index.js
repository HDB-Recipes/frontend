import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00bcd4",
      dark: "#008ba3",
      light: "#62efff",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff867c",
      // main: "#ef5350",
      main: "#fff",
      dark: "#b61827",
      contrastText: "#fff"
    }
  }
});

// const darkTheme = createMuiTheme({
//   palette: {
//     type: "dark",
//     primary: {
//       main: "#00bcd4",
//       dark: "#008ba3",
//       light: "#62efff",
//       contrastText: "#fff"
//     },
//     secondary: {
//       light: "#ff867c",
//       main: "#ef5350",
//       dark: "#b61827",
//       contrastText: "#fff"
//     }
//   }
// });

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
