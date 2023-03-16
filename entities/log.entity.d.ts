import { LogLevel, LogType } from '@/common/log.types';
export declare class Log {
    id: number;
    message: string;
    level: LogLevel;
    type: LogType;
    timestamp: string;
}
