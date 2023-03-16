import { Response } from 'express';
export declare class DownloadController {
    download(type: string, fileName: string, res: Response): Promise<void>;
}
