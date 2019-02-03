import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest  } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  db: AngularFirestore;

  transactions: Observable<Transaction[]>;
  transaction: Observable<Transaction[]>;

  where$: BehaviorSubject<string|null>;
  hash$: BehaviorSubject<string|null>;

  constructor(private datePipe: DatePipe, db: AngularFirestore) {
    this.db = db;
    this.where$ = new BehaviorSubject(null);
    this.transactions = combineLatest(this.where$).pipe(
      switchMap(([where]) =>
        db.collection<Transaction>('transactions', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (where) { query = query.where('from', '==', where); }
        query = query.orderBy('nonce', 'desc');
        return query;
        }).valueChanges()
    ));

    this.hash$ = new BehaviorSubject(null);
    this.transaction = combineLatest(this.hash$).pipe(
      switchMap(([hash]) =>
        db.collection<Transaction>('transactions', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (hash) { query = query.where('hash', '==', hash); }
        query = query.limit(1);
        return query;
        }).valueChanges()
    ));
  }

  getAccountTransactions(account: string): Observable<Transaction[]> {
    this.where$.next(account);
    return this.transactions;
  }

  getTransaction(hash: string): Observable<Transaction[]> {
    this.hash$.next(hash);
    return this.transaction;
  }

  addTransaction(tnx: Transaction): void {
    this.db.collection('transactions').add(tnx)
      .then(ref => console.log)
      .catch(error => console.error);
  }

  updateTransaction(tnx: Transaction): void {
    this.db.collection('transactions').ref.where('hash', '==', tnx.hash)
      .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.error(`Transaction hash ${tnx.hash} is not found`);
          } else {
            const doc = querySnapshot.docs[0];
            this.db.collection('transactions').doc(doc.id).update(tnx);
          }
        })
        .catch(error => console.error);

  }
}
