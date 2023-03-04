import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore/'



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user = new User();
  birthDate!: Date;

  constructor(private afs: Firestore) {}


  

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user', this.user);
    
    this.afs
    .collection('users')
    .add(this.user.toJSON());
  }
}
