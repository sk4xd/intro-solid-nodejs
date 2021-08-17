import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const user = this.createUserUseCase.execute(request.body)

    return response.status(201).json(user);
  }
}

export { CreateUserController };
