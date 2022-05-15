import { Box } from "@chakra-ui/layout";
import { Player } from "./Player";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <Box
      gridTemplateAreas={`
        "sidebar main"
        "player player"
    `}
      width="100vw"
      height="100vh"
    >
      <Sidebar />
      <Player />
    </Box>
  );
};
