import { Request, Response } from "express";
import { container } from 'tsyringe';

import CreateUserService from "@modules/users/services/CreateUserService";

export default class UsersController {
  public static async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService)
    const user = await createUser.execute({
      name,
      email,
      password
    });

    // @ts-expect-error
    delete user.password;
    return response.status(201).json(user);
  }

}
