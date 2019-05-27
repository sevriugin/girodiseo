export const ORDERSTATUS = {
    NEW: 'new',
    OPEN: 'open',
    REG: 'registered',
    AUTH: 'authorized',
    PAID: 'paid',
    FAILED: 'failed',
    CLOSED: 'closed'
};

export class Payment {
    id: string;
    sector: string;
    reference: string;
    signature?: string;
}

export class Item {
    id: string;
    code: string;
    name: string;
    img: string;
    price: number;
    priceTag: string;
    currency: string;
    qty: number;
}

export class Order {
    ref: string;
    date: string;
    status: string;
    client: string;
    items?: Item[];
    total?: number;
    payment?: Payment;
}
