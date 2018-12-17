import { Get, Controller } from "@nestjs/common";

@Controller('api')
export class ApiController {
  constructor() {}

  @Get()
  getHome() {
    return {};
  }
}
