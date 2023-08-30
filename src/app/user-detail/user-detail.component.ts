import { Component, OnInit, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditContactComponent } from '../dialog-edit-contact/dialog-edit-contact.component';
import { DialogEditAvatarComponent } from '../dialog-edit-avatar/dialog-edit-avatar.component';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  userID = '';
  user: User = new User();
  showIcon: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog, 
    public themeService: ThemeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userID = params['id'];
      this.getUser();
    });
  }

  async getUser() {
    const docRef = doc(this.firestore, "users", this.userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.user = new User(docSnap.data());
    }
  }

  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userID = this.userID;

    dialog.afterClosed().subscribe(() => {
      this.getUser();
    });
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userID = this.userID;

    dialog.afterClosed().subscribe(() => {
      this.getUser();
    });
  }

  editContact() {
    const dialog = this.dialog.open(DialogEditContactComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userID = this.userID;

    dialog.afterClosed().subscribe(() => {
      this.getUser();
    });
  }

  editAvatar() {
    const dialog = this.dialog.open(DialogEditAvatarComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userID = this.userID;

    dialog.afterClosed().subscribe(() => {
      this.getUser();
    });
  }

  formatCustomerID(customerID: number) {
    let numberString = customerID.toString();
    let paddedNumber = numberString.padStart(5, '0');
    return paddedNumber;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}