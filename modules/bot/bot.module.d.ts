import { OnModuleInit } from '@nestjs/common';
import { BotProcessService } from './services/bot.process.service';
export declare class BotModule implements OnModuleInit {
    private readonly botProcessService;
    constructor(botProcessService: BotProcessService);
    onModuleInit(): void;
}
