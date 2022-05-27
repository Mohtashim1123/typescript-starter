import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly AuthSerices: AuthService
    ) {}
// @UseGuards(AuthGuard('local'))  
@Post('/login')
  async login(@Body() LoginDto: LoginDto){
    return this.AuthSerices.validateUser(LoginDto)
  }

  @Post('/signup')
  create(@Body() AuthDto: AuthDto) {
    return this.usersService.create(AuthDto);
  }
}