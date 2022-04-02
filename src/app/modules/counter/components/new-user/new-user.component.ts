import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  username = '';
  constructor(public dialogRef: MatDialogRef<NewUserComponent>) {}

  createUser(): void {
    console.log('You created me!');
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
