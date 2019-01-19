import { Get, Controller } from "@nestjs/common";

@Controller('api')
export class ApiController {
  @Get()
  getHome() {
    return {};
  }
}
