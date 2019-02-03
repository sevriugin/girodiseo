import { Injectable, Inject } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

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
  readonly TokenContainer = require('./build/contracts/TokenContainer.json');
  readonly TokenPool = require('./build/contracts/TokenPool.json');

  private mnemonic: string;
  private wallet: any;
  private contract: any;
  private accounts: string[];
  private container: any;
  private pool: any;

  constructor(@Inject(WEB3) private web3: Web3, private transactions: TransactionService) {
    const { generateMnemonic, EthHdWallet } = this.ethHdWallet;

    this.mnemonic = 'dish hip orange move divert opera primary sketch empty pistol car boil';
    this.wallet = EthHdWallet.fromMnemonic(this.mnemonic);
    this.accounts = this.wallet.generateAddresses(2);

    this.contract = new web3.eth.Contract(
      this.TokenLoyalty.abi,
      this.TokenLoyalty.networks['4'].address,
      {from: this.accounts[0]}
      );

    this.container = new web3.eth.Contract(
      this.TokenContainer.abi,
      this.TokenContainer.networks['4'].address,
      {from: this.accounts[0]}
      );

    this.pool = new web3.eth.Contract(
      this.TokenPool.abi,
      this.TokenPool.networks['4'].address,
      {from: this.accounts[0]}
    );

    if (typeof this.contract !== 'undefined') {
      console.log(`EthcontractService: TokenLoyalty contract is here ${this.contract.options.address}`);
    }

    if (typeof this.container !== 'undefined') {
      console.log(`EthcontractService: TokenContainer contract is here ${this.container.options.address}`);
    }

    if (typeof this.pool !== 'undefined') {
      console.log(`EthcontractService: TokenPool contract is here ${this.pool.options.address}`);
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

  getAccountNonce(account: string | null): Observable<any[]> {
    const acc = account ? account : this.accounts[0];
    console.log(`getAccountBalance: ${acc}`);
    return bindNodeCallback(this.web3.eth.getTransactionCount)(acc);
  }

  getTokenBalance(account: string | null): Observable<string[]> {
    const acc = account ? account : this.accounts[0];
    console.log(`getTokenBalance: ${acc}`);
    return bindNodeCallback(this.container.methods.balanceOf(acc).call)({from: this.accounts[0], gasPrice: '8000000000', gas: '1000000'});
  }

  getTokenIds(): Observable<any[]> {
    // tslint:disable-next-line:max-line-length
    return bindNodeCallback(this.container.methods.tokensOfOwner(this.accounts[0]).call)({from: this.accounts[0], gasPrice: '8000000000', gas: '1000000'});
  }

  transfer(account: string): void {
    // get token id
    this.getTokenIds().subscribe(result => {
      console.log('Token ID :' + result[0]);
      const id = result[0];
      const data = this.container.methods.transfer(account, id).encodeABI();
      console.log('Data: ' + data);
      // get account nonce
      this.getAccountNonce(null).subscribe(nonce => {
        console.log(`Nonce ${nonce}`);
        const rawTx = this.wallet.signTransaction({
          from: this.accounts[0],
          to: this.container.options.address,
          value: 0x0,
          nonce: nonce,
          gasPrice: 80000000000,
          gasLimit: 1000000,
          chainId: 4,
          data: data,
        });
        console.log(rawTx);
        this.web3.eth.sendSignedTransaction(rawTx)
          .on('receipt', (receipt) => {
            const tnx: Transaction = {
              from: this.accounts[0],
              to: this.container.options.address,
              value: 0x0,
              nonce: +nonce,
              chainId: 4,
              points: 1,
              hash: receipt.transactionHash,
              block: receipt.blockNumber
            };
            console.log(receipt);
            console.log(tnx);
            this.transactions.addTransaction(tnx);
          })
          .on('error', console.error);

      });
    });

  }

}
