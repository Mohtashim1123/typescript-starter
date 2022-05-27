import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {

  @ApiProperty({ type: String, description: '' })
  readonly email: string;

  @ApiProperty({ type: String, description: '' })
  readonly password: string;

}