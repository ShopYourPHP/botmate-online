import { CommandProp } from '@/common/command.types';
import { Bot } from './bot.entity';
export declare class Command {
    id: number;
    name: string;
    command: string;
    script?: string;
    enabled?: boolean;
    privateCommand?: boolean;
    props: CommandProp[];
    bot: Bot;
    createdAt: string;
    updatedAt: string;
}
