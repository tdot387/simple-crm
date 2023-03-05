import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user: User;
  loading = false;
  birthDate!: Date;
  userId: string;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, public fs: AngularFirestore) {}

  ngOnInit(): void {
    
  }



  saveUser() {
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
