import { Component, OnInit, inject } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-contact',
  templateUrl: './dialog-edit-contact.component.html',
  styleUrls: ['./dialog-edit-contact.component.scss']
})
export class DialogEditContactComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
  userID = '';
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditContactComponent>) { }

  ngOnInit(): void {
  }

  async editUser(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      const userDocRef = doc(this.firestore, 'users', this.userID);
      const newData = this.user.toJSON();

      await updateDoc(userDocRef, newData);

      this.dialogRef.close();
      this.loading = false;
    }
  }
}
