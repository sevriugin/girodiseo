export class RideParameters {
    mintime: number = 1000 * 6;
    maxtime: number = 1000 * 60 * 60 * 3;
}

export class Ethereum {
    networks: {
      rinkeby: 'https://rinkeby.infura.io/fyE6fpwJWFc6fBYSet1w',
      local: 'http://localhost:8545'
    };
    mnemonic: 'first mix any adult deal sand brand about window will casual second';
}

export class Parameters {
    ride: RideParameters;
    ethereum: Ethereum;
}
