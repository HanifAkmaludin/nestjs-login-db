import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  async findOne(username: string): Promise<any> {
    return this.userRepository.findOne({
      where: {
        username: username,
      },
    });
  }
}

// private readonly users: any[];

//   constructor() {
//     this.users = [
//       {
//         userId: 1,
//         username: 'john',
//         password: 'changeme',
//         pet: { name: 'alfred', picId: 1 },
//       },
//       {
//         userId: 2,
//         username: 'chris',
//         password: 'secret',
//         pet: { name: 'gopher', picId: 2 },
//       },

//       {
//         userId: 3,
//         username: 'maria',
//         password: 'guess',
//         pet: { name: 'jenny', picId: 3 },
//       },
//     ];
//   }

// constructor() {
//   this.users = [
//     {
//       userId: 1,
//       username: 'john',
//       password: 'changeme',
//       pet: { name: 'alfred', picId: 1 },
//     },
//     {
//       userId: 2,
//       username: 'chris',
//       password: 'secret',
//       pet: { name: 'gopher', picId: 2 },
//     },
//     {
//       userId: 3,
//       username: 'maria',
//       password: 'guess',
//       pet: { name: 'jenny', picId: 3 },
//     },
//   ];
// }
