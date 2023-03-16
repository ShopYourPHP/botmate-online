import { Filter } from '@/entities/filter.entity';
import { Bot, Context } from 'grammy';
import { Repository } from 'typeorm';
export declare class BotFilterService {
    private filterRepository;
    private readonly logger;
    constructor(filterRepository: Repository<Filter>);
    setupFilters(bot: Bot): void;
    filterWords(ctx: Context, data: any): Promise<void>;
    filterServiceMessage(ctx: Context, data: any): Promise<void>;
    filterMessage(ctx: Context, data: any): Promise<void>;
}
