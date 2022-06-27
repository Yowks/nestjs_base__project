import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNumberString, IsString } from "class-validator";

export class ProductDto {
  @ApiProperty()
  @IsNumberString()
  id: number;
  
  @ApiProperty()
  @IsString()
  label: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsInt()
  price: string;

  @ApiProperty()
  @IsInt()
  category_id: number;

  @ApiProperty()
  thumbnail_url?: string;

  @ApiProperty()
  @IsInt()
  visible_public : number;
   
  @ApiProperty()
  @IsInt()
  visible_authenticated : number;
}
