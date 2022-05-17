import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.fullstack_access_token;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, ">>>secretKey<<<") as JwtPayload;
        user = prisma.user.findUnique({
          where: { id },
        });

        if (!user) throw new Error("Not authorised");
      } catch (error) {
        res.status(401);
        res.json({ error: "Not authorised" });
      }
      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not authorised" });
  };
};
