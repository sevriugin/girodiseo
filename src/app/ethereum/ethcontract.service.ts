import { Injectable, Inject } from '@angular/core';

import { WEB3 } from './tokens';
import Web3 from 'web3';


import { Observable, bindNodeCallback, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

declare function require(url: string);
declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class EthcontractService {

  readonly ethHdWallet = require('eth-hd-wallet');
  readonly TokenLoyalty = require('./build/contracts/TokenLoyalty.json');

  private mnemonic: string;
  private wallet: any;
  private contract: any;
  private accounts: string[];

  constructor(@Inject(WEB3) private web3: Web3) {
    const { generateMnemonic, EthHdWallet } = this.ethHdWallet;

    this.mnemonic = 'dish hip orange move divert opera primary sketch empty pistol car boil';
    this.wallet = EthHdWallet.fromMnemonic(this.mnemonic);
    this.accounts = this.wallet.generateAddresses(2);

    this.contract = new web3.eth.Contract(
      this.TokenLoyalty.abi,
      this.TokenLoyalty.networks['4'].address,
      {from: this.accounts[0]}
      );

    if (typeof this.contract !== 'undefined') {
      console.log(`EthcontractService: contract is here ${this.contract.options.address}`);
    }

    console.log(this.accounts);
    console.log(this.mnemonic);
  }

  alife() {
    if (typeof this.web3 !== 'undefined') {
      console.log('EthcontractService: web3 is here');
    } else {
      console.error('EthcontractService: web3 is not injected');
    }
  }

  getAccounts(): Observable<string[]> {
    return of(this.accounts);
  }

  getMnemonic(): Observable<string> {
    return of(this.mnemonic);
  }

  getBalance(): Observable<any[] | Error> {
    console.log('getBalance');
    return bindNodeCallback(this.contract.methods.getBalance().call)({from: this.accounts[0], gasPrice: '8000000000', gas: '1000000'});
  }

  getAccountBalance(account: string | null): Observable<string[]> {
    const acc = account ? account : this.accounts[0];
    console.log(`getAccountBalance: ${acc}`);
    return bindNodeCallback(this.web3.eth.getBalance)(acc);
  }

}
