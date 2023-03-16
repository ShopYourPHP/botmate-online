import { TriggerAction, TriggerCondition } from '@common/types/trigger.types';
export declare class Trigger {
    id: string;
    name: string;
    mode: string;
    actions: TriggerAction[];
    conditions: TriggerCondition[];
}
