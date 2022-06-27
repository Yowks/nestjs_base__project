import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumberString, IsString } from "class-validator";

export class UserDto {
  @ApiProperty()
  @IsNumberString()
  id: number;
  
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsEmail()
  name: string;

  @ApiProperty()
  @IsString()
  password_hash: string;
}