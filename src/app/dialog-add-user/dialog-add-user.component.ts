import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate!: Date;
  loading = false;

  constructor(public fs: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
    
  }


  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user', this.user);
    this.loading = true;

   this.fs.collection("users")
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log(result);
        this.dialogRef.close();
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}