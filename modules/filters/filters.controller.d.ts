import { Filter, FilterType } from '@/entities/filter.entity';
import { SaveFilterDTO } from './dto/save-filter.dto';
import { FiltersService } from './filters.service';
export declare class FiltersController {
    private filterService;
    constructor(filterService: FiltersService);
    getFilters(chatId: string, botId: string, type: FilterType): Promise<Filter>;
    saveFilters(chatId: string, botId: string, data: SaveFilterDTO): Promise<Filter>;
}
