import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar } from "@angular/material";

export interface skillandHistory {
  catefory: string;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  website: string;
}

export interface expertise {
  title: string;
  logo: string;
  description: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  skills: Observable<any[]>
  expertise: Observable<expertise[]>

  constructor(private firestore : AngularFirestore, private snackbar : MatSnackBar) { 

  }

  getSkills(collection){
    return this.firestore.collection(collection).valueChanges();
  }

  saveSkill(data, coll = 'skillsandhistory'){
    return this.firestore.collection(coll).add(data).then((res) =>{
      this.openSnackbar('Info Added 😉')
      console.log(res)
    },err => {
      console.log(err)
      this.openSnackbar('Something went wrong 🤔🤔')
    })
  }

  openSnackbar(message){
    this.snackbar.open(message,'close',{
      duration: 4000
    })
  }
}
