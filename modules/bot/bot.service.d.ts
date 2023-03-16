import { Bot } from '@/entities/bot.entity';
import { Repository } from 'typeorm';
import { DownloadService } from '../download/download.service';
export declare class BotService {
    private botRepository;
    private readonly downloadService;
    constructor(botRepository: Repository<Bot>, downloadService: DownloadService);
    getBotsByUserId(id: number): Promise<Bot[]>;
    createBot(token: string, userId: number): Promise<Bot>;
    updateBot(id: string, data: Partial<Bot>): Promise<import("typeorm").UpdateResult>;
    deleteBot(id: string): Promise<import("typeorm").DeleteResult>;
}
