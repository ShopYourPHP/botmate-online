import { AnnouncementsService } from './ancmt.service';
import { CreateAnnouncementDTO } from './dto/create-announcement';
export declare class AnnouncementsController {
    private ancmtService;
    constructor(ancmtService: AnnouncementsService);
    create(botId: string, chatId: string, body: CreateAnnouncementDTO): Promise<void>;
}
