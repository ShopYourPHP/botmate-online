import { Bot } from '@/entities/bot.entity';
import { Request } from 'express';
import { BotService } from './bot.service';
import { CreateBotDTO } from './dto/create-bot.dto';
import { BotProcessService } from './services/bot.process.service';
import { UpdateBotDTO } from './dto/update-bot.dto';
export declare class BotController {
    private botService;
    private botProcess;
    constructor(botService: BotService, botProcess: BotProcessService);
    getBots(req: Request): Promise<Bot[]>;
    createBot(request: Request, body: CreateBotDTO): Promise<Bot>;
    startBot(id: string): Promise<{
        ok: boolean;
    }>;
    stopBot(id: string): Promise<{
        ok: boolean;
    }>;
    restartBot(id: string): Promise<{
        ok: boolean;
    }>;
    updateBot(id: string, body: UpdateBotDTO): Promise<import("typeorm").UpdateResult>;
    deleteBot(id: string): Promise<{
        ok: boolean;
    }>;
}
