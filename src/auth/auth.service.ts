import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
      ) {}
  
    async validateUser(LoginDto): Promise<any> {
      const user = await this.usersService.findOneBy(LoginDto.email);
      if(!user) throw new UnauthorizedException('Credentials incorrect')
      if(user.creatPassword !== LoginDto.password) throw new UnauthorizedException('Credentials incorrect')
      return this.login(user.email, user.email)
    }

   login(email:string, password:string) {
      const payload = { email: email, password: password };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }