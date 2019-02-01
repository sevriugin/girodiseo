import { NgModule, ModuleWithProviders, Type, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
// Web3
import { WEB3 } from './tokens';

declare function require(url: string);

const Web3 = require('web3');

// Services
import { EthcontractService } from './ethcontract.service';

@NgModule({
 imports: [CommonModule],
 declarations: [],
 providers: [ EthcontractService , {
         provide: WEB3,
         useFactory: () => new Web3('https://us-central1-cloud-firestore-test-d95bf.cloudfunctions.net/proxy')
  }]
})
export class EthereumModule {}
