import { SettingsUpdateDTO } from './dto/settings-update.dto';
import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    update(body: SettingsUpdateDTO): Promise<any>;
}
