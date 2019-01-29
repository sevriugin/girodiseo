import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot, CollectionReference } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest  } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Tag, Registration } from './tag';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  db: AngularFirestore;
  tags: Observable<Tag[]>;
  tag: Observable<Tag[]>;
  userTags: Observable<Tag[]>;
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
    this.tags = combineLatest(this.number$, this.start$, this.order$).pipe(
      switchMap(([num, start, order]) =>
        db.collection<Tag>('tags', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (num) { query = query.limit(num); }
        if (order) { query = query.orderBy(order); if (start) { query = query.startAt(start); } }
        return query;
        }).valueChanges()
    ));

    this.where$ = new BehaviorSubject(null);
    this.tag = combineLatest(this.where$).pipe(
      switchMap(([where]) =>
        db.collection<Tag>('tags', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (where) { query = query.where('id', '==', where); }
        query = query.limit(1);
        return query;
        }).valueChanges()
    ));

    this.mobile$ = new BehaviorSubject(null);
    this.userTags = combineLatest(this.mobile$).pipe(
      switchMap(([mobile]) =>
        db.collection<Tag>('tags', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('reg.mobile', '==', mobile);
        return query;
        }).valueChanges()
    ));
  }

  getTagById(id: string): Observable<Tag[]> {
    this.where$.next(id);
    return this.tag;
  }

  getTagByIdCB(id: string, cb: Function): void {
    this.db.collection('tags').ref.where('id', '==', id)
      .get()
        .then(function(querySnapshot) {
          if (querySnapshot.empty) {
            cb(null);
          } else {
            cb(querySnapshot.docs[0]);
          }
        });
  }

  getTagsByMobile(mobile: string): Observable<Tag[]> {
    this.mobile$.next(mobile);
    return this.userTags;
  }

  setRegistration(id: string, docRef: string, reg: Registration): void {
    const regDate = this.datePipe.transform(new Date(), 'dd-MM-yy');
    if (docRef) {
      console.log(`TagService: update tag ref: ${docRef} and id: ${id}`);
      this.db.collection('tags').doc(docRef).update({ reg });
    } else {
      console.log(`TagService: add new tag ${id}`);
      this.db.collection('tags').add({ id, regDate, reg });
    }
  }

  setRegDate(id: string, cb: Function): void {
    this.db.collection('tags').ref.where('id', '==', id)
      .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.error(`TagService: setRegDate: tag not found for id ${id}`);
            cb(`TagService: setRegDate: tag not found for id ${id}`, null);
          } else {
            const doc = querySnapshot.docs[0];
            const regDate = this.datePipe.transform(new Date(), 'dd-MM-yy');
            // update tag doc
            console.log(`TagService: setRegDate: set regDate: ${regDate} for id: ${id}`);
            this.db.collection('tags').doc(doc.id).update({ regDate });
            cb(null, doc);
          }
        });
  }

  getTags(): Observable<Tag[]> {
    return this.tags;
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
}
