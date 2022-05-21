import handleFetch from "./handleFetch";

type AuthProps = {
  type: "signin" | "signup";
  body: {
    email: string;
    password: string;
  };
};

export default function handleAuth({ body, type }: AuthProps) {
  return handleFetch(type, body);
}
