import { Component, OnInit, inject } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
  userID = '';
  loading: boolean = false;
  birthDate: Date | any;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  ngOnInit(): void {
  }

  async editUser() {
    this.loading = true;
    const userDocRef = doc(this.firestore, 'users', this.userID);
    const newData = this.user.toJSON();

    await updateDoc(userDocRef, newData);
    
    this.dialogRef.close();
    this.loading = false;
  }
}
