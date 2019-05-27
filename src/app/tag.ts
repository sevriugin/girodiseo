import { Bike } from './rider';
import { Payment } from './order';

export class Registration {
    mobile: string;
    sms: string;
}

export class Tag {
    id: string;
    regDate: string;
    reg: Registration;
    bike?: Bike;
    payment?: Payment;
    type?: string;
    status?: string;
}
