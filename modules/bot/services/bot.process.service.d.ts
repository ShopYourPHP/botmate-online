import { Bot as TelegramBot } from 'grammy';
import { Bot } from '@/entities/bot.entity';
import { Repository } from 'typeorm';
import { CommandService } from '@modules/command/command.service';
import { Chat } from '@/entities/chat.entity';
import { DownloadService } from '@/modules/download/download.service';
import { BotFilterService } from './bot.filter.service';
import { BotRestartEvent } from '../events/bot-restart.event';
import { Conversation } from '@/entities';
import { BotSandbox } from './bot.sandbox';
import { SocketService } from '@/gateways/socket.service';
export declare class BotProcessService {
    private botRepository;
    private chatRepository;
    private cnvRepository;
    private cmdService;
    private downloadService;
    private filterService;
    private botSandbox;
    private socketService;
    processes: Map<string, TelegramBot>;
    private readonly logger;
    constructor(botRepository: Repository<Bot>, chatRepository: Repository<Chat>, cnvRepository: Repository<Conversation>, cmdService: CommandService, downloadService: DownloadService, filterService: BotFilterService, botSandbox: BotSandbox, socketService: SocketService);
    startBot(botId: string): Promise<boolean>;
    startAllBots(): Promise<void>;
    stopBot(botId: string): Promise<boolean>;
    restartBot(data: BotRestartEvent): Promise<void>;
}
