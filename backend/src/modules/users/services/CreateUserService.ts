import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from "@modules/users/infra/typeorm/entities/User";
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HasProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) { }

  async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('E-mail address already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword
    });

    return user;
  }
}

export default CreateUserService;
