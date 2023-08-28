import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
  userID = '';
  birthDate: string | any;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
  }

  ngOnInit(): void {
  }

  async saveUser(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      const userCollection = collection(this.firestore, 'users');

      await this.createCustomerID(userCollection);
      this.getEntryDate();
      this.user.birthDate = this.birthDate;

      const newData = this.user.toJSON();
      await addDoc(userCollection, newData);

      this.dialogRef.close();
      this.loading = false;
    }
  }

  async createCustomerID(userCollection: any) {
    const q = query(userCollection);
    const querySnapshot = await getDocs(q);
    const amountOfUsers = querySnapshot.size;
    this.user.customerID = amountOfUsers + 1;
  }

  getEntryDate() {
    const currentDate = new Date().toLocaleDateString('en-GB');
    this.user.entryDate = currentDate;
  }
}