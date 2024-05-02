"use client";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    colored: true;
    base: true;
    clear: true;
  }
  interface ButtonPropsColorOverrides {
    filled: true;
    unfilled: true;
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    typography: {
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            //colored filled
            props: { variant: "colored", color: "filled", disabled: false },
            style: {
              color: "white",
              background: "linear-gradient(175deg, #0D93E0, #00C4C4)",
              borderRadius: "9999px",
              border: "1px solid 0D93E0",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            },
          },
          {
            //colored filled disabled
            props: { variant: "colored", color: "filled", disabled: true },
            style: {
              color: "rgba(0, 0, 0, 0.24)",
              background: "rgba(0, 0, 0, 0.06)",
              borderRadius: "9999px",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
            },
          },
          {
            //base filled
            props: { variant: "base", color: "filled", disabled: false },
            style: {
              color: "rgba(0, 0, 0, 0.56)",
              backgroundColor: "#FFFFFF",
              borderRadius: "9999px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.03)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.01)",
              },
            },
          },
          {
            //base filled disabled
            props: { variant: "base", color: "filled", disabled: true },
            style: {
              color: "rgba(0, 0, 0, 0.24)",
              background: "rgba(0, 0, 0, 0.06)",
              borderRadius: "9999px",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
            },
          },
          {
            //clear filled
            props: { variant: "clear", color: "filled" },
            style: {
              color: "rgba(0, 0, 0, 0.56)",
              backgroundColor: "#FFFFFF",
              borderRadius: "9999px",
              border: "1px solid rgba(0, 0, 0, 0)",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "rgba(0, 0, 0, 0.8)",
                border: "1px solid rgba(0, 0, 0, 0)",
              },
            },
          },
          {
            //clear filled disabled
            props: { variant: "clear", color: "filled", disabled: true },
            style: {
              color: "rgba(0, 0, 0, 0.56)",
              backgroundColor: "#FFFFFF",
              borderRadius: "9999px",
              border: "1px solid rgba(0, 0, 0, 0)",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "rgba(0, 0, 0, 0.8)",
                border: "1px solid rgba(0, 0, 0, 0)",
              },
            },
          },
          {
            props: { variant: "colored", color: "unfilled" },
            style: {
              color: "rgba(0, 0, 0, 0.56)",
              backgroundColor: "#FFFFFF",
              borderRadius: "9999px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#FFFFFF",
                opacity: 0.8,
              },
            },
          },
          {
            props: { variant: "colored", color: "unfilled", disabled: true },
            style: {
              color: "#FFFFFF",
              backgroundColor: "rgba(255, 255, 255, 0.22)",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.01)",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
            },
          },
          {
            props: { variant: "base", color: "unfilled" },
            style: {
              color: "#FFFFFF",
              backgroundColor: "rgba(255, 255, 255, 0.22)",
              borderRadius: "9999px",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.22)",
              },
            },
          },
          {
            props: { variant: "base", color: "unfilled", disabled: true },
            style: {
              color: "#FFFFFF",
              backgroundColor: "rgba(255, 255, 255, 0.22)",
              borderRadius: "9999px",
              border: "2px solid rgba(255, 255, 255, 0)",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.22)",
              },
            },
          },
          {
            //clear filled
            props: { variant: "clear", color: "unfilled" },
            style: {
              color: "rgba(255, 255, 255, 0.7)",
              borderRadius: "9999px",
              border: "1px solid rgba(0, 0, 0, 0)",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "36px",
              textAlign: "center",
              padding: "8px 16px",
              cursor: "pointer",
              "&:hover": {
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0)",
              },
            },
          },
        ],
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#0D93E0",
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
