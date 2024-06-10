import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  getUsers() {
    return this.usersRepository.find();
  }
  // getUsers() {
  //   return this.usersRepository.find({ relations: ['settings'] });
  // }
  getUsersById(id: number) {
    return this.usersRepository.findOneBy({ id });
  }
  createUser(createUserData: CreateUserInput) {
    const newUser = this.usersRepository.create(createUserData);
    return this.usersRepository.save(newUser);
  }
  getUserByBirthDate(birthDate: Date) {
    return this.usersRepository.findOneBy({ birthDate });
  }
}
