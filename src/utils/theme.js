import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#664DE5",
    },
  },
  overrides: {
    MuiInputBase: {
      root: { height: 50 },
    },
    MuiButton: {
      root: { height: 50 },

      label: {
        fontSize: 14,
        textTransform: "none",
      },
    },
  },
});

export default theme;
