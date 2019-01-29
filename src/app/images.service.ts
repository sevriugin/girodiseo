import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private storageRef: firebase.storage.Reference;
  private imagesRef: firebase.storage.Reference;

  constructor(private storage: AngularFireStorage) {}

  uploadAvatar(id: string, avatar: File): AngularFireUploadTask {
    // create full path to the file with id as subdirectory
    const filePath = `${id}/images/${avatar.name}`;
    const ref = this.storage.ref(filePath);
    // upload and return task
    return this.storage.upload(filePath, avatar);
  }
}
