import { Settings } from '@/entities';
import { Repository } from 'typeorm';
export declare class SettingsService {
    private readonly settingsRepo;
    private logger;
    constructor(settingsRepo: Repository<Settings>);
    load(key: string, defaultValue?: any): Promise<any>;
    save(key: string, value: any, scope?: string, defaultValue?: any): Promise<any>;
}
