import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import useAuth from "../lib/useAuth";

type AuthProps = {
  type: "signin" | "signup";
};

export const Auth: FC<AuthProps> = ({ type }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Box height={"100vh"} width={"100vw"}>
      <Flex
        alignItems={"center"}
        height={"100%"}
        justifyContent={"center"}
        bg="teal.500"
        color="white"
      >
        <form>
          <Heading marginBottom={"8"}>
            {type === "signin" ? "Login" : "Sign up"}
          </Heading>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            variant="outline"
            marginBottom={"8"}
            _placeholder={{ color: "white" }}
          />

          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
            variant="outline"
            marginBottom={"8"}
            _placeholder={{ color: "white" }}
          />

          <Button colorScheme="pink" color="white">
            {type === "signin" ? "Login" : "Sign up"}
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
