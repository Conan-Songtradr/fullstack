import useFetch from "./useFetch";

type AuthProps = {
  type: "signin" | "signup";
  body: {
    email: string;
    password: string;
  };
};

export default function handleAuth({ body, type }: AuthProps) {
  return useFetch(type, body);
}
