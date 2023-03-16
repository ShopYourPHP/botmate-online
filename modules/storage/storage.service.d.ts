import { Storage } from '@/entities';
import { Repository } from 'typeorm';
export declare class StorageService {
    private storageRepository;
    constructor(storageRepository: Repository<Storage>);
    get<T>(key: string, defaultValue?: T): Promise<T>;
    set<T>(key: string, value: T): Promise<void>;
}
