import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collection, collectionSnapshots } from '@angular/fire/firestore';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
  allUsers: any[] = [];
  sortingAspect: string = 'customerID';
  sortingOrder: string = 'asc';

  constructor(public dialog: MatDialog, public themeService: ThemeService) {
  }

  ngOnInit(): void {
    const colRef = collection(this.firestore, "users");
    const colSnapshot = collectionSnapshots(colRef);

    colSnapshot.subscribe((snapshot: any[]): void => {
      this.allUsers = snapshot.map((doc: any) => {
        return { id: doc.id, data: doc.data() };
      });
    });

    this.toggleSortingOrder();
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  formatCustomerID(customerID: string): string {
    let numberString = customerID.toString();
    let paddedNumber = numberString.padStart(5, '0');
    return paddedNumber;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  sortUsers(): void {
    this.allUsers.sort((a, b) => {
      const aValue = this.sortingAspect === 'customerID' ? +a.data[this.sortingAspect] : a.data[this.sortingAspect];
      const bValue = this.sortingAspect === 'customerID' ? +b.data[this.sortingAspect] : b.data[this.sortingAspect];

      if (aValue < bValue) {
        return this.sortingOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortingOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  toggleSortingOrder() {
    this.sortingOrder = this.sortingOrder === 'asc' ? 'desc' : 'asc';
    this.sortUsers();
  }
}