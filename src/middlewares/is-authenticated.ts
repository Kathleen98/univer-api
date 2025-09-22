import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IsAthenticatedProps {
    sub: string
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authtoken = req.headers.authorization;

    if (!authtoken) {
        return res.status(401).end()
    }

    const [, token] = authtoken.split(" ")

    try {

        const { sub } = verify(
            token!,
            process.env.JWT_SECRET!
        ) as IsAthenticatedProps

        req.user_id = sub

        return next()

    } catch (e) { }
}