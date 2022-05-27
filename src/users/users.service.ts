import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    let data = {
      "firstName": createUserDto.firstName,
      "lastName": createUserDto.lastName,
      "email": createUserDto.email,
      "creatPassword": createUserDto.creatPassword
    }
    
    try {
      let response = await this.usersRepository.save(data)
      return `Create successfull`;
    } catch {
      return `Error`;
    }
  }

  findAll() {
    return  this.usersRepository.find();
  }

  findOneBy(email: string) {
    return this.usersRepository.findOne({ where: { email: email } });

  }

  findOne(email: string) {
    return this.usersRepository.findOne(email);

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
