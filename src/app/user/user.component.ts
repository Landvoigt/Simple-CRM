import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collection, collectionSnapshots } from '@angular/fire/firestore';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
  allUsers: any[] | undefined;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    const colRef = collection(this.firestore, "users");
    const colSnapshot = collectionSnapshots(colRef);

    colSnapshot.subscribe((snapshot: any[]): void => {
      this.allUsers = snapshot.map((doc: any) => {
        return { id: doc.id, data: doc.data() };
      });
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  formatCustomerID(customerID: string): string {
    let numberString = customerID.toString();
    let paddedNumber = numberString.padStart(5, '0');
    return paddedNumber;
  }
}