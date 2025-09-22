import { NextFunction, Request, Response } from "express";
import { isAuthenticated } from "./is-authenticated";
import prisma from "../lib/prisma";

export async function AdminAithenticated(req: Request, res: Response, next: NextFunction) {
  isAuthenticated

  const { email } = req.body

  console.log(email)

  const profile = await prisma.user.findFirst({
    where: {
      email: email
    }
  })


  if (profile?.role === 'admin') {
    next()
  } else {
    console.error('O usuário não tem acesso ao painel administrativo')
    throw new Error("Usuário sem permissão admin");
  }


}