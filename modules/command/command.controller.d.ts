import { Command } from '@/entities';
import { CommandService } from './command.service';
import { CreateCommandDTO } from './dto/create-command.dto';
import { UpdateCommandDTO } from './dto/update-command.dto';
export declare class CommandController {
    private readonly cmdService;
    constructor(cmdService: CommandService);
    getCommands(botId: string): Promise<Command[]>;
    createCommand(commandData: CreateCommandDTO): Promise<Command>;
    getCommandById(id: number): Promise<Command>;
    updateCommand(id: number, commandData: UpdateCommandDTO): Promise<import("typeorm").UpdateResult>;
}
