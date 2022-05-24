import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({ type: String, description: '' })
  readonly firstName: string;

  @ApiProperty({ type: String, description: '' })
  readonly lastName: string;

  @ApiProperty({ type: String, description: '' })
  readonly email: string;

  @ApiProperty({ type: String, description: '' })
  readonly creatPassword: string;

}