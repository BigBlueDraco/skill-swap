import { PickType } from "@nestjs/swagger";
import { UserDto } from "../user/user.dto";
import { LoginBody } from "@skill-swap/types";

export class LoginBodyDto
  extends PickType(UserDto, ["email", "password"] as const)
  implements LoginBody {}
