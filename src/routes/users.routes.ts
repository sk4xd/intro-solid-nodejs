import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  try {
    createUserController.handle(request, response)
  } catch (e) {
    response.status(400).json({ error: e.message })
  }
}
  
);

usersRoutes.patch("/:user_id/admin", (request, response) => {
    try {
      turnUserAdminController.handle(request, response)
    } catch(e) {
      if(e.message.includes("encontrado")) {
        response.status(404).json({ error: e.message })
      } else {
        response.status(400).json({ error: e.message })
      }
    }
  }
);

usersRoutes.get("/:user_id", (request, response) => {
  try {
    showUserProfileController.handle(request, response)
  } catch(e) {
    response.status(404).json({ error: e.message })
  }
}
);

usersRoutes.get("/", (request, response) => {
  try {
    listAllUsersController.handle(request, response)
  } catch(e) {
    response.status(400).json({ error: e.message })
  }
}
  
);

export { usersRoutes };
