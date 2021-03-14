import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();
const userController = new UserController();

router.post ("/users", userController.create);
router.get ("/users/all", userController.show);
router.get ("/users/:name", userController.showName);

export { router };

//rotas do banco de dados