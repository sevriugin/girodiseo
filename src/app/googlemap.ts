
export interface AgmMarker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}

export interface AgmLocation {
    lat: number;
    lng: number;
    viewport?: Object;
    zoom: number;
    address_level_1?: string;
    address_level_2?: string;
    address_country?: string;
    address_zip?: string;
    address_state?: string;
    marker?: AgmMarker;
}

export interface EnterExitPoint {
    loc: AgmLocation;       // enter / exit point locaton ! the distance between check point must be === radius !
    next: number;           // next CheckPoint id for exit point (not count for entry)
    nextEEP?: number;       // next Exit/Entry point in the next check point
    slow: boolean;          // if true then slow ride to the next checkPoint (not count for entry)
    entry?: boolean;        // true if it was entry point
    timestamp?: number;     // timestemp of enter / exit
    index?: number;         // entry/ exit point index in CheckPoint eep array
}

export interface CheckPoint {
    id: number;             // check point id
    loc: AgmLocation;       // check point location
    type: string;           // check point type (start/finish, intermediate)
    scope: number;          // destination between rider and loc where exit/entry point change will be recorded
    radius: number;         // destination between loc and all EnterExit Points
    eep: EnterExitPoint[];  // enter / exit points for this checkpoint
    distance?: number;      // minimum distance recorded when passed check point
    timestamp?: number;     // time stemp for minimum distance record
    passed?: boolean;       // true if check point is passed, entry and exit points were recorded
}

export interface Giro {
    id: number;             // giro id
    name: string;           // ... name
    desc: string;           // ... description
    length: number;         // ... length in km
    points: CheckPoint[];   // ... check points
}

export interface Traceroute {
    rideId: number;         // ride Id for route trace
    points: CheckPoint[];   // ... check points records
    next?: number;          // next check point
    nextEEP?: number;       // next exit / entry point within checkpoint
    currentEEP?: number;    // current exit / etry point
}
