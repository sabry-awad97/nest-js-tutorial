import { Controller, Get, Next, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// The Controllers are used as the routing layer.
@Controller('users')
export class UsersController {
  @Get('')
  getAllUsers(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction
  ) {
    const users = [{ Name: 'Sabry', Age: 25 }];
    res.status(200).json(users);
  }

  @Get(':id')
  getUser(@Param() params) {
    return { getUser: params.id };
  }

  @Post('')
  addUser() {}
}
