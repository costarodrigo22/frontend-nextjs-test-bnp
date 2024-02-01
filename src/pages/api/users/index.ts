/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from "next/types";

import { IUser } from "@/types/user.d";
import { faker } from "@faker-js/faker";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(405);

  const users: Array<IUser> = [];

  for (let i = 0; i < 10; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    users.push({
      id: faker.number.int(),
      name: faker.person.fullName({ firstName, lastName }),
      email: faker.internet.email({ firstName, lastName }),
    });
  }

  return res.status(200).json(users);
};
