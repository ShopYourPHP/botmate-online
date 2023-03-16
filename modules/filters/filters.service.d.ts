import { Repository } from 'typeorm';
import { Filter, FilterType } from '@/entities/filter.entity';
export declare class FiltersService {
    private readonly filterRepo;
    constructor(filterRepo: Repository<Filter>);
    saveFilter(botId: string, chatId: string, type: FilterType, value: any): Promise<Filter>;
    getFilter(botId: string, chatId: string, type: FilterType): Promise<Filter>;
}
