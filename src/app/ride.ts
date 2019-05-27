import { Rider } from './rider';
import { Traceroute } from './googlemap';

export class Ride {
    id: number;
    tagid: string;
    start: number;
    open: boolean;
    time?: number;
    finish?: number;
    rider?: Rider;
    trace?: Traceroute;
}
