import { Monitor } from 'redis-smq-monitor';

export enum RedisDriver {
    REDIS = 'redis',
    IOREDIS = 'ioredis'
}

export interface ConfigInterface extends Monitor.ConfigInterface {
    namespace?: string;
    redis: {
        driver: RedisDriver;
        options: {
            [key: string]: any;
        };
    };
    log?: {
        enabled: boolean;
        options: {
            [key: string]: any;
        };
    };
}
