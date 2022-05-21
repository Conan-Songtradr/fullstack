import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import { Main, Player, Sidebar } from "../components";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <Box
          display="grid"
          gridTemplateAreas={`
            "sidebar main"
            "player player"
         `}
          gridTemplateColumns="300px 1fr"
          gridTemplateRows="1fr 100px"
          height="100vh"
          width="100vw"
        >
          <Sidebar />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Player />
        </Box>
      )}
    </ChakraProvider>
  );
};

export default MyApp;
