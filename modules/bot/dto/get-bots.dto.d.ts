import { Bot } from '@/entities/bot.entity';
declare const GetBotsDTO_base: import("@nestjs/common").Type<Omit<Bot, "user">>;
export declare class GetBotsDTO extends GetBotsDTO_base {
}
export {};
