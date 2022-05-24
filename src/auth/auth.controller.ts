import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
@Get('/login')
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post('/signup')
  create(): string {
    return 'data save';
  }

}
