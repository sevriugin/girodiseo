import { Rider } from './rider';

export class Ride {
    id: number;
    tagid: string;
    start: number;
    open: boolean;
    time?: number;
    finish?: number;
    rider?: Rider;
}
