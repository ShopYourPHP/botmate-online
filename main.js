"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const Sentry = require("@sentry/node");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('/api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('BotMate API')
        .setDescription('BotMate API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {});
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get('PORT');
    Sentry.init({
        dsn: 'https://6ecc22f862884130a0dfd8daef01126c@o4504821126987776.ingest.sentry.io/4504821145796608',
        tracesSampleRate: 1.0,
    });
    await app.listen(PORT || 8080);
}
exports.startServer = bootstrap;
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'dev') {
    bootstrap();
}
//# sourceMappingURL=main.js.map