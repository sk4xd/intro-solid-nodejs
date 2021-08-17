import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {

    const userEmail = this.usersRepository.findByEmail(email)

    if (userEmail) {
      throw new Error("E-mail already been taken.");
    }

    const user: User = this.usersRepository.create({ email, name });

    return user;
  }
}

export { CreateUserUseCase };
