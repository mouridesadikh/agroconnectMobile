import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {InscriptionModel} from  '../../model/inscription-model';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.page.html',
  styleUrls: ['./singin.page.scss'],
})
export class SinginPage implements OnInit {
   signin  : any = {};
 
   inscriptionform: FormGroup;
   inscriptionModel: InscriptionModel;
   message: string;



 
   error_messages = {
     'email': [
       { type: 'required', message: 'Champ obligatoire' },
       { type: 'email', message: 'Email incorrecte' }
     ],
     'password': [
       { type: 'required', message: 'Champ obligatoire' },
       { type: 'minLength', message: 'le mot de passe doit supérieur à 6' },
       { type: 'maxLength', message: 'le mot de passe doit inférieur à 12' }
     ],
     'name':[
      { type: 'required', message: 'Champ obligatoire' },
      { type: 'name', message: 'nom incorrecte' }
     ],
     'telephone':[
      { type: 'required', message: 'Champ obligatoire' },
      { type: 'telephone', message: 'Email incorrécte' },
      { type: 'minLength', message: 'le mot de passe doit supérieur à 6' },
      { type: 'maxLength', message: 'le mot de passe doit inférieur à 15' }
     ],
     'adresse':[
      { type: 'adresse', message: 'Adresse incorrecte' }
     ],
     'cni':[
      { type: 'cni', message: 'CNI incorrecte' },
      { type: 'minLength', message: 'le mot de passe doit supérieur à 0' },
      { type: 'maxLength', message: 'le mot de passe doit inférieur à 18' }
     ]
   };
   constructor(public formbuiler: FormBuilder, private router: Router
     , private storage: Storage) {


     this.inscriptionform = this.formbuiler.group({
 
       email: new FormControl('', Validators.compose([
         Validators.required,
         Validators.email,
 
       ])),
       password: new FormControl('', Validators.compose([
         Validators.required,
         Validators.minLength(6), 
         Validators.maxLength(12),
       ])),
       name : new FormControl('',Validators.compose([
        Validators.required,
      ])),
      telephone : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6), 
         Validators.maxLength(12),
      ])),
      adresse : new FormControl('',Validators.compose([
        Validators.required,
      ])),
      cni : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6), 
        Validators.maxLength(12),
      ])),

      
     });
   }
 
 
   ngOnInit() {
   }

   // ici on enregistre un nouveau client
 
   inscription() {
     this.inscriptionModel = new InscriptionModel()
     this.inscriptionModel.email = this.inscriptionform.value.email;
     this.inscriptionModel.password = this.inscriptionform.value.password;
   
     if (this.inscriptionModel) {
       
       this.router.navigateByUrl('home');
     } else {
       this.message = 'probleme de connexion !';
     }
   }
 
}
