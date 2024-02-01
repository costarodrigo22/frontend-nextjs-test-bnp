/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from "next/types";

import { IUser, IUserCreate } from "@/types/user.d";
import { faker } from "@faker-js/faker";

const users: IUser[] = [];

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405);

  const body: IUserCreate = req.body;

  if (!body.name || !body.email) return res.status(400);

  const id = faker.number.int();

  users.push({
    id: id,
    name: body.name,
    email: body.email,
  });

  return res.status(200).json(undefined);
};
