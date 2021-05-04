import { Request, Response } from "express";
import { container } from "tsyringe";

import UpdateUserAvatarService from "@modules/users/services/UpdateUserAvatarService";

export default class UserAvatarController {
  public static async update(request: Request, response: Response): Promise<Response> {
    const uploadAvatar = container.resolve(UpdateUserAvatarService);
    const user = await uploadAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename
    });

    // @ts-expect-error
    delete user.password;
    return response.json(user);
  }
}
