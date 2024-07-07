import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataDbService } from '../services/data-db.service';

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  emailVal: any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  createFormGroup(){

    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailVal)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])

    })
  }


  contactForm: FormGroup;


  constructor(private dbData: DataDbService){
    this.contactForm = this.createFormGroup();
  }



  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    if(this.contactForm.valid){
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('Valido');
    }else{
      console.log('No valido');
    }
  
  }

  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get message(){
    return this.contactForm.get('message');
  }

}
