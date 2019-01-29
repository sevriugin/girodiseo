import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot, CollectionReference } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest  } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Rider, Bike } from './rider';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RiderService {
  db: AngularFirestore;
  riders: Observable<Rider[]>;
  rider: Observable<Rider[]>;
  userRider: Observable<Rider[]>;
  number$: BehaviorSubject<number|null>;
  start$: BehaviorSubject<string|null>;
  order$: BehaviorSubject<string|null>;
  where$: BehaviorSubject<string|null>;
  mobile$: BehaviorSubject<string|null>;

  constructor(private datePipe: DatePipe, db: AngularFirestore) {
    this.db = db;
    this.number$ = new BehaviorSubject(1000);
    this.start$ = new BehaviorSubject(null);
    this.order$ = new BehaviorSubject('id');
    this.riders = combineLatest(this.number$, this.start$, this.order$).pipe(
      switchMap(([num, start, order]) =>
        db.collection<Rider>('riders', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (num) { query = query.limit(num); }
        if (order) { query = query.orderBy(order); if (start) { query = query.startAt(start); } }
        return query;
        }).valueChanges()
    ));

    this.where$ = new BehaviorSubject(null);
    this.rider = combineLatest(this.where$).pipe(
      switchMap(([where]) =>
        db.collection<Rider>('riders', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (where) { query = query.where('id', '==', where); }
        query = query.limit(1);
        return query;
        }).valueChanges()
    ));

    this.mobile$ = new BehaviorSubject(null);
    this.userRider = combineLatest(this.mobile$).pipe(
      switchMap(([mobile]) =>
        db.collection<Rider>('riders', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('mobile', '==', mobile);
        return query;
        }).valueChanges()
    ));
  }

  getRiders(): Observable<Rider[]> {
    return this.riders;
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

  getRiderById(id: string): Observable<Rider[]> {
    this.where$.next(id);
    return this.rider;
  }

  getRiderByIdCB(id: string, cb: Function): void {
    this.db.collection('riders').ref.where('id', '==', id)
      .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            cb(null);
          } else {
            cb(querySnapshot.docs[0]);
          }
        });
  }

  getRiderByMobile(mobile: string): Observable<Rider[]> {
    this.mobile$.next(mobile);
    return this.userRider;
  }

  getRiderByMobileCB(mobile: string, cb: Function): void {
    this.db.collection('riders').ref.where('mobile', '==', mobile)
      .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            cb(null);
          } else {
            cb(querySnapshot.docs[0]);
          }
        });
  }

  addNewRiderCB(rider: Rider, cb: Function): void {
    this.db.collection('riders').add(rider)
      .then((ref) => cb(null, ref))
      .catch((err) => cb(err, null));
  }

  updateRiderByIdCB(rider: Rider, cb: Function): void {
    this.db.collection('riders').ref.where('id', '==', rider.id)
      .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.error(`RiderService: updateRiderByIdCB: rider not found for id ${rider.id}`);
            cb(`RiderService: updateRiderByIdCB: rider not found for id ${rider.id}`, null);
          } else {
            const doc = querySnapshot.docs[0];
            // update tag doc
            console.log(`RiderService: updateRiderByIdCB: updating rider for id: ${rider.id}`);
            this.db.collection('riders').doc(doc.id).update(rider);
            cb(null, doc);
          }
        });
  }


}
