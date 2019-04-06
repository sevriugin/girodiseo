import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest  } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order, ORDERSTATUS } from './order';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  db: AngularFirestore;

  orders: Observable<Order[]>;
  order: Observable<Order[]>;
  clientOrders: Observable<Order[]>;

  number$: BehaviorSubject<number|null>;
  start$: BehaviorSubject<string|null>;
  order$: BehaviorSubject<string|null>;
  where$: BehaviorSubject<string|null>;
  client$: BehaviorSubject<string|null>;
  status$: BehaviorSubject<string|null>;

  constructor(private datePipe: DatePipe, db: AngularFirestore) {
    this.db = db;
    this.number$ = new BehaviorSubject(1000);
    this.start$ = new BehaviorSubject(null);
    this.order$ = new BehaviorSubject('ref');
    this.orders = combineLatest(this.number$, this.start$, this.order$).pipe(
      switchMap(([num, start, order]) =>
        db.collection<Order>('orders', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('status', '==', ORDERSTATUS.CLOSED);
        if (num) { query = query.limit(num); }
        if (order) { query = query.orderBy(order); if (start) { query = query.startAt(start); } }
        return query;
        }).valueChanges()
    ));

    this.where$ = new BehaviorSubject(null);
    this.order = combineLatest(this.where$).pipe(
      switchMap(([where]) =>
        db.collection<Order>('orders', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (where) { query = query.where('ref', '==', where); }
        query = query.limit(1);
        return query;
        }).valueChanges()
    ));

    this.client$ = new BehaviorSubject(null);
    this.status$ = new BehaviorSubject(null);
    this.clientOrders = combineLatest(this.client$, this.status$).pipe(
      switchMap(([client, status]) =>
        db.collection<Order>('orders', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('client', '==', client);
        if (status) { query = query.where('status', '==', status); }
        query = query.orderBy('ref');
        return query;
        }).valueChanges()
    ));
  }

  getOrders(): Observable<Order[]> {
    return this.orders;
  }

  setNumber(num: number|null) {
    this.number$.next(num);
  }

  setStart(start: string|null) {
    this.start$.next(start);
  }

  setOrder(order: string|null) {
    this.order$.next(order);
  }

  getOrderByRef(ref: string): Observable<Order[]> {
    this.where$.next(ref);
    return this.order;
  }

  getClientOrders(client: string): Observable<Order[]> {
    this.client$.next(client);
    return this.clientOrders;
  }

  getClientCurrentOrder(client: string): Observable<Order[]> {
    this.client$.next(client);
    this.status$.next(ORDERSTATUS.NEW);
    return this.clientOrders;
  }

  newOrder(client: string): Order | null {
    const timestamp = new Date();
    const ref = Math.floor( Math.random() * 100000000 );
    const date = this.datePipe.transform(timestamp, 'dd-MM-yy');
    const order: Order = {
      ref: `${date}-${ref}`,
      date: date,
      status: ORDERSTATUS.NEW,
      client: client,
      items: [],
      total: 0
    };
    this.db.collection('orders').add(order)
      .then(() => order )
      .catch(console.error);
    return order;
  }

  updateOrder(order: Order): void {
    this.db.collection('orders').ref.where('ref', '==', order.ref)
      .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.error('Order not found');
          } else {
            const doc = querySnapshot.docs[0];
            this.db.collection('orders').doc(doc.id).update(order)
              .catch(console.error);
          }
        });
  }
}
