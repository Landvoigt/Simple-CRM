import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-dialog-edit-avatar',
  templateUrl: './dialog-edit-avatar.component.html',
  styleUrls: ['./dialog-edit-avatar.component.scss']
})
export class DialogEditAvatarComponent {
  firestore: Firestore = inject(Firestore);
  user = new User();
  userID = '';
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAvatarComponent>, public themeService: ThemeService) { }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
