import { ConsoleLogger } from '@nestjs/common';
export declare class BotMateLogger extends ConsoleLogger {
    error(message: any, stack?: string, context?: string): void;
}
