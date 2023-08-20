import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
  userID = '';
  birthDate: Date | any;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
  }

  async saveUser() {
    this.loading = true;
    const userDocRef = doc(this.firestore, 'users', this.userID);
    const newData = this.user.toJSON();

    await updateDoc(userDocRef, newData);

    this.dialogRef.close();
    this.loading = false;
  }
}