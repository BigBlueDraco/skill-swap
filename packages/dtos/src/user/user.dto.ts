import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { Exclude, Expose } from "class-transformer";
export class UserDto implements User {
  @ApiProperty({ description: "Unique identifier of the user" })
  @Expose()
  id!: number;

  @ApiProperty({ description: "First name of the user" })
  @Expose()
  firstName!: string;

  @ApiProperty({ description: "Last name of the user" })
  @Expose()
  lastName!: string;

  @ApiProperty({ description: "Middle name of the user" })
  @Expose()
  middleName!: string;

  @ApiProperty({
    description: "Email of the user",
    example: "example@mail.com",
  })
  @Expose()
  email!: string;

  @ApiProperty({ description: "Password of the user", writeOnly: true })
  @Exclude()
  password!: string;
}
