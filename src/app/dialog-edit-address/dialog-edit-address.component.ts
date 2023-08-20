import { Component, OnInit, inject } from '@angular/core';
import { Firestore, doc, getDoc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
  userID = '';
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) { }

  ngOnInit(): void {
  }

  async editUser() {
    this.loading = true;
    const userDocRef = doc(this.firestore, 'users', this.userID);
    const newData = this.user.toJSON();

    await updateDoc(userDocRef, newData);

    // this.user = new User(newData);

    const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
      this.user = docSnapshot.data() as User;
    });

    this.dialogRef.close();
    this.loading = false;

    unsubscribe();
  }
}


// async editUser() {
//   this.loading = true;
//   const userDocRef = doc(this.firestore, 'users', this.userID);
//   const newData = this.user.toJSON();

//   await updateDoc(userDocRef, newData);

//   const docSnap = await getDoc(userDocRef);

//   if (docSnap.exists()) {
//     this.user = new User(docSnap.data());
//     console.log(this.user);
//   } else {
//     console.log("User not found");
//   }

//   this.dialogRef.close();
//   this.loading = false;
// }