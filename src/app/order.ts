export const ORDERSTATUS = {
    NEW: 'new',
    OPEN: 'open',
    CLOSED: 'closed'
};

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
}
