import { Wallet } from './wallet';

export class Bike {
    brand: string;
    model: string;
    year: string;
    type: string;
}

export class Rider {
    id: string;
    mobile: string;
    nikname: string;
    gender?: boolean;
    avatar?: string;
    group?: string;
    country?: string;
    ghost?: boolean;
    bikes?: Bike[];
    wallet?: Wallet;
}
