import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, public fs: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log(this.userId)
      this.getUser();
    })
  }


  getUser() {
    this.fs
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
      });
  }

  openAddressDialog() {

  }
}
