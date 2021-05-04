import { Router } from "express";
import multer from 'multer';
import uploadConfig from '@config/upload';

import usersController from '@modules/users/infra/http/controllers/UsersController';
import userAvatarController from '@modules/users/infra/http/controllers/UserAvatarController';

import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";


const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);

export default usersRouter;
