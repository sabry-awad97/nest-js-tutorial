import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Next,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CreateUserDTO } from './DTO/create-users.dto';

// The Controllers are used as the routing layer.
@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction
  ) {
    const users = [{ Name: 'Sabry', Age: 25 }];
    res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return { getUser: id };
  }

  @Post()
  addUser(@Body() body: CreateUserDTO) {
    console.log(body.name, body.age);
  }
}
