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
import { UsersService } from './users.service';

// The Controllers are used as the routing layer.
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async getAllUsers(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction
  ) {
    try {
      const users = await this.usersService.getAllUsers();
      res.status(HttpStatus.OK).json(users);
    } catch (error) {
      console.error(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getUser(@Res() res: Response, @Param('id') id: string) {
    try {
      const user = await this.usersService.getUser(+id);
      res.status(HttpStatus.OK).json(user);
    } catch (error) {
      console.error(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async addUser(@Res() res: Response, @Body() body: CreateUserDTO) {
    const users = await this.usersService.addUser(body);
    res.status(HttpStatus.OK).json(users);
  }
}
