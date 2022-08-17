import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-users.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Michael', age: 25 },
    { id: 2, name: 'Mary', age: 27 },
  ];

  async getAllUsers() {
    return this.users;
  }

  async getUser(id: number) {
    const user = this.users.find(user => {
      return user.id === id;
    });
    if (!user) {
      throw new HttpException('user not found', 404);
    }
    return user;
  }

  async addUser(user: CreateUserDTO): Promise<CreateUserDTO[]> {
    this.users.push(user);
    return this.users;
  }
}
