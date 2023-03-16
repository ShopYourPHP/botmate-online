import { StorageService } from '@/modules/storage/storage.service';
import { Context } from 'grammy';
export declare class BotSandbox {
    private readonly storageService;
    private readonly logger;
    constructor(storageService: StorageService);
    getSandbox(botId: string, Ctx?: Context): {
        Ctx: Context;
        Axios: import("axios").AxiosStatic;
        Storage: {
            get: (key: string, defaultValue?: any) => Promise<any>;
            set: (key: string, value: any) => Promise<void>;
        };
    };
}
