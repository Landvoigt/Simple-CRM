import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from "firebase/firestore";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
  birthDate: Date | any;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
  }

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);

    const docRef = await addDoc(collection(this.firestore, "users"), this.user.toJSON());
    console.log("Document written with ID: ", docRef.id);
    
    this.loading = false;
    this.dialogRef.close();
  }
}