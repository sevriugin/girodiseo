import { Ethereum } from '../parameters';

declare function require(url: string);

export class TokenLoyalty {

    protected param: Ethereum;
    readonly HDWalletProvider = require('truffle-hdwallet-provider');
    readonly Web3 = require('web3');
    readonly contract = require('truffle-contract');
    readonly TokenLoyaltyArtifact = require('./build/contracts/TokenLoyalty.json');

    protected web3Provider = new this.HDWalletProvider(
        this.param.mnemonic,
        this.param.networks.rinkeby,
        0, 2
    );

    protected address = this.web3Provider.addresses[0];
    protected tokenAddr = this.web3Provider.addresses[1];

    protected web3 = new this.Web3(this.web3Provider);
    protected contr = this.contract(this.TokenLoyaltyArtifact);

    protected instance = undefined;
    protected data = undefined;
    protected watch = undefined;
    protected partner = undefined;

    constructor() {

        console.log(`Set provider with contract owner: [${this.address}] and token owner: [${this.tokenAddr}]`);
        this.contr.setProvider(this.web3.currentProvider);

        if (this.instance === undefined) {
            this.deploy();
        }
    }
    deploy () {
        this.contr.deploy()
            .then(instance => this.instance = instance )
            .catch(error => console.error(error));
    }

}
