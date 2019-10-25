import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginModel } from '../../model/loginmodel';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginform: FormGroup;
  loginModel: LoginModel;
  message: string;
  // messsage   retourner si la connexion n'est pas bonne
  error_messages = {
    'email': [
      { type: 'required', message: 'Champ obligatoire' },
      { type: 'email', message: 'Email incorrécte' }
    ],
    'password': [
      { type: 'required', message: 'Champ obligatoire' },
      { type: 'minLength', message: 'le mot de passe doit supérieur à 6' },
      { type: 'maxLength', message: 'le mot de passe doit inférieur à 12' }
    ]
  };
  constructor(public formbuiler: FormBuilder, private router: Router
    , private storage: Storage) {

    // system de validation du formulaire de  connexion
    this.loginform = this.formbuiler.group({

      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,

      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]))
    });
  }
  oninscription()
  {
    this.router.navigateByUrl('singin');
  }

  ngOnInit() {
  }
  //this method allow users to connect

  onConnexion() {
    this.loginModel = new LoginModel()
    this.loginModel.email = this.loginform.value.email;
    this.loginModel.password = this.loginform.value.password;
    console.log(this.loginform.value);
    if (this.loginModel.email === 'c.bpo@gmail.com' && this.loginModel.password === 'passer') {
      this.storage.set("email", this.loginModel.email);
      this.router.navigateByUrl('home');
    } else {
      this.message = 'probleme de connexion !';
    }
  }
  
}
