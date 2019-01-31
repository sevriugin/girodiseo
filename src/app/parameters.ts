export class RideParameters {
    mintime: number = 1000 * 6;
    maxtime: number = 1000 * 60 * 60 * 3;
}

export class Parameters {
    ride: RideParameters;
}
