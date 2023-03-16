import { SettingsService } from '../settings/settings.service';
import { BotMateService } from './botmate.service';
export declare class BotMateController {
    private bmService;
    private readonly confService;
    constructor(bmService: BotMateService, confService: SettingsService);
    getVersion(): Promise<{
        version: string;
    }>;
    update(): string;
}
