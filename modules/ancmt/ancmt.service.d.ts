import { Bot } from '@/entities';
import { Repository } from 'typeorm';
export declare class AnnouncementsService {
    private botRepository;
    constructor(botRepository: Repository<Bot>);
    createAnnouncement(botId: string, chatId: string, text: string): Promise<void>;
}
