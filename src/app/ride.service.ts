import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot, CollectionReference } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest  } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Rider, Bike } from './rider';
import { Ride } from './ride';
import { DatePipe } from '@angular/common';
import { CdkAccordion } from '@angular/cdk/accordion';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  db: AngularFirestore;
  rides: Observable<Ride[]>;
  ride: Observable<Ride[]>;
  tagRides: Observable<Ride[]>;
  number$: BehaviorSubject<number|null>;
  start$: BehaviorSubject<string|null>;
  order$: BehaviorSubject<string|null>;
  where$: BehaviorSubject<string|null>;
  tagid$: BehaviorSubject<string|null>;

  constructor(private datePipe: DatePipe, db: AngularFirestore) {
    this.db = db;
    this.number$ = new BehaviorSubject(1000);
    this.start$ = new BehaviorSubject(null);
    this.order$ = new BehaviorSubject('time');
    this.rides = combineLatest(this.number$, this.start$, this.order$).pipe(
      switchMap(([num, start, order]) =>
        db.collection<Ride>('rides', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('time', '>', 0);
        if (num) { query = query.limit(num); }
        if (order) { query = query.orderBy(order); if (start) { query = query.startAt(start); } }
        return query;
        }).valueChanges()
    ));

    this.where$ = new BehaviorSubject(null);
    this.ride = combineLatest(this.where$).pipe(
      switchMap(([where]) =>
        db.collection<Ride>('rides', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (where) { query = query.where('tagid', '==', where); }
        query = query.where('open', '==', true);
        query = query.limit(1);
        return query;
        }).valueChanges()
    ));

    this.tagid$ = new BehaviorSubject(null);
    this.tagRides = combineLatest(this.tagid$).pipe(
      switchMap(([tagid]) =>
        db.collection<Ride>('rides', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('tagid', '==', tagid);
        query = query.orderBy('start');
        return query;
        }).valueChanges()
    ));
  }

  getRides(): Observable<Ride[]> {
    return this.rides;
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

  getRideByTagId(tagid: string): Observable<Ride[]> {
    this.where$.next(tagid);
    return this.ride;
  }

  getRideByTagIdCB(tagid: string, cb: Function): void {
    this.db.collection('rides').ref.where('tagid', '==', tagid)
      .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            cb(null);
          } else {
            cb(querySnapshot.docs[0]);
          }
        });
  }

  getRidesByTagId(tagid: string): Observable<Ride[]> {
    this.tagid$.next(tagid);
    return this.tagRides;
  }

  getRidesByTagIdCB(tagid: string, cb: Function): void {
    this.db.collection('rides').ref.where('tagid', '==', tagid)
      .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            cb(null);
          } else {
            cb(querySnapshot.docs);
          }
        });
  }

  addNewRideCB(ride: Ride, cb: Function): void {
    this.db.collection('rides').add(ride)
      .then((ref) => cb(null, ref))
      .catch((err) => cb(err, null));
  }

  updateRideByRefCB(ref: string, ride: Ride, cb: Function): void {
    this.db.collection('rides').doc(ref).update(ride)
      .then(() => cb(null))
      .catch(err => cb(err));
  }

  updateRideByIdCB(ride: Ride, cb: Function): void {
    this.db.collection('rides').ref.where('id', '==', ride.id)
      .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            cb('not fount', null);
          } else {
            const doc = querySnapshot.docs[0];
            this.db.collection('rides').doc(doc.id).update(ride)
              .then(() => cb(null, doc.ref))
              .catch((err) => cb(err, null));
          }
        });
  }

  getRideByIdCB(id: number, cb: Function): void {
    this.db.collection('rides').ref.where('id', '==', id)
      .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            cb('not fount', null);
          } else {
            const doc = querySnapshot.docs[0];
            cb(null, doc.data());
          }
        });
  }

}
