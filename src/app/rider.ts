import { Wallet } from './wallet';

export const brands = [
    {
        name: 'Colnago',
        logo: 'colnago-logo.png',
        class: 'colnago-header-image',
        models: [
            {
                name: 'E64',
                desc: 'E-Bike, Monocoque frame',
                img: 'colnago-e64.jpg',
                year: '2019',
                type: 'Road E-Bike',
                material: 'Carbon',
                brakes: ['disk'],
                group: ['electronic', 'mechanical'],
                ebike: true
            },
            {
                name: 'C64',
                desc: 'The C64 frame is full and made in Italy and is the result of more than 2 years of research',
                img: 'colnago-c64.jpg',
                year: '2019',
                type: 'Road',
                material: 'Carbon',
                brakes: ['rim', 'disk'],
                group: ['electronic', 'mechanical'],
                ebike: false
            },
            {
                name: 'Concept',
                desc: 'A monocoque frame designed for power and speed, with a superior aerodynamic performance',
                img: 'colnago-concept.jpg',
                year: '2019',
                type: 'Road',
                material: 'Carbon',
                brakes: ['rim', 'disk'],
                group: ['electronic', 'mechanical'],
                ebike: false
            },
            {
                name: 'V2-r',
                descr: 'Monocoque in carbon fiber of the highest quality, for lightness and performance without compromise on any terrain.',
                img: 'colnago-v2r.jpg',
                year: '2019',
                type: 'Road',
                material: 'Carbon',
                brakes: ['rim', 'disk'],
                group: ['electronic', 'mechanical'],
                ebike: false
            }
        ]
    },
    {
        name: 'Pinarello',
        logo: 'pinarello-logo.gif',
        class: 'pinarello-header-image',
        models: [
            {
                name: 'DOGMA F10',
                desc: 'Asymmetric Carbon Frame with Nanoalloy Technology',
                img: 'pinarello-f10.jpeg',
                year: '2019',
                type: 'Road',
                material: 'Carbon',
                brakes: ['rim'],
                group: ['electronic', 'mechanical'],
                ebike: false
            },
            {
                name: 'DOGMA F10 DISK',
                desc: 'Asymmetric Carbon Frame with Nanoalloy Technology and disk brakes',
                img: 'pinarello-f10-disk.jpeg',
                year: '2019',
                type: 'Road',
                material: 'Carbon',
                brakes: ['rim'],
                group: ['electronic', 'mechanical'],
                ebike: false
            }
        ]
    },
    {
        name: 'Argone 18',
        logo: 'argon18-logo.png',
        class: 'argon18-header-image',
    },
    {
        name: 'Cervelo',
        logo: 'cervelo-logo.png',
        class: 'cervelo-header-image',
    },
    {
        name: 'Add new brand',
        change: true,
        logo: 'add.png'
    }
];

export class Frame {
    bin?: string;           // bicycle identifivation number
    brand: string;          // brand name, e.g. Colnago
    model?: string;         // frame model, e.g. E-64
    year?: string;          // production year, e.g. 2019
    type: string;           // frame type, e.g. road
    material: string;       // frame material, e.g. carbon, metal
    new?: boolean;          // new or used
    disk?: boolean;         // true for disk brakes
    electronic?: boolean;   // true for electronic group set
    ebike?: boolean;        // true fot e-bike
    images?: string[];      // frame / bike images
}

export class Wheel {
    brand: string;          // wheels brans name, e.g. Mavic
    model?: string;         // wheels model, e.g. AKSIUM ELITE EVO UST EBM
    year?: string;          // production year
    type: string;           // wheel type
    tire: string;           // tier type / size, e.g. tube 23
    new: boolean;           // new or used
    material: string;       // frame material, e.g. carbon, metal, combined
    position: string;       // front, rear, both - one record for rear and front wheels
    images?: string[];      // wheels images
    desc?: string;          // wheel description
}

export class Group {
    brand: string;          // brand name, e.g. SHIMANO
    model?: string;         // model, e.g. ULTEGRA Di2
    year?: string;          // production year, e.g. 2019
    type: string;           // group set type, e.g. electric
    disk: boolean;          // true for disk brackes
    new: boolean;           // new or used
    images?: string[];      // group set images
    desc?: string;          // group description
}

export class Bike {
    tagid: string;          // RFID tag ID
    frame: Frame;           // frame
    wheels?: Wheel[];       // wheels
    group?: Group;          // group set
    images?: string[];      // bike images
    desc?: string;          // bike description
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
