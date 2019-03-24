import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { Consts } from 'src/common/consts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public user = new User();
    

  constructor(private http: Http) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
      console.log(email + ' ' + password);
    
    let user = {
        id: 1,
        email: email,
        password: password,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        roleID: 1,
        token: 'fake-jwt-token'
    };

    return Observable.create( observer => {
        observer.next(user);
               if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            console.log(user);
            this.currentUserSubject.next(user);
        }
    });
}
//     return this.http.post(Consts.API_ENDPOINT + `/authenticate`, { email, password })
//     .pipe(map((user: any) => {
//         // login successful if there's a jwt token in the response
        
//         if (user && user.token) {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             this.currentUserSubject.next(user);
//         }
//         return user;
//     }));
//   }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}