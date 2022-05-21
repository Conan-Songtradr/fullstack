import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import handleAuth from "../lib/handleAuth";

type AuthProps = {
  type: "signin" | "signup";
};

export const Auth: FC<AuthProps> = ({ type }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await handleAuth({ body: { email, password }, type });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw">
      <Flex
        alignItems="center"
        bg="teal.500"
        color="white"
        height="100%"
        justifyContent="center"
      >
        <form onSubmit={handleSubmit}>
          <Heading marginBottom="8">
            {type === "signin" ? "Login" : "Sign up"}
          </Heading>
          <Input
            _placeholder={{ color: "white" }}
            marginBottom="8"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            variant="outline"
          />

          <Input
            _placeholder={{ color: "white" }}
            marginBottom="8"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
            variant="outline"
          />

          <Button
            color="white"
            colorScheme="pink"
            isLoading={isLoading}
            type="submit"
          >
            {type === "signin" ? "Login" : "Sign up"}
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
