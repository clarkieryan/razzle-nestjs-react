import { NestFactory } from "@nestjs/core";
import { AppModule } from "./server/app.module";
import { NotFoundExceptionFilter } from "./server/exceptionFilters/notfoundFilter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new NotFoundExceptionFilter());
  await app.listen(3000);

  if ((module as any).hot) {
    (module as any).hot.accept();
    (module as any).hot.dispose(() => app.close());
  }
}
bootstrap();
