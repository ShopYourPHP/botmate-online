import { Command } from '@/entities';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Repository } from 'typeorm';
import { SettingsService } from '../settings/settings.service';
import { CreateCommandDTO } from './dto/create-command.dto';
import { UpdateCommandDTO } from './dto/update-command.dto';
export declare class CommandService {
    private readonly cmdRepo;
    private readonly settingsService;
    private readonly eventEmitter;
    constructor(cmdRepo: Repository<Command>, settingsService: SettingsService, eventEmitter: EventEmitter2);
    createCommand(command: CreateCommandDTO): Promise<Command>;
    getCommandById(id: number): Promise<Command>;
    updateCommand(id: number, command: UpdateCommandDTO): Promise<import("typeorm").UpdateResult>;
    getCommandsByBotId(botId: string): Promise<Command[]>;
    findCommand(botId: string, command: string): Promise<Command>;
    findAllCommands(botId: string): Promise<Command[]>;
}
