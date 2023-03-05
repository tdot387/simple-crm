import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  user: User;
  loading = false;
  userId: string

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, public fs: AngularFirestore) {}

  ngOnInit(): void {
    
  }

  saveUser() {
    this.loading = true;
    this.fs
    .collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(()=>{
      this.loading = false;
      this.dialogRef.close();
    })

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
