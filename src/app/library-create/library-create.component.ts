import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-library-create',
  templateUrl: './library-create.component.html',
  styleUrls: ['./library-create.component.css']
})
export class LibraryCreateComponent implements OnInit {
  libraryForm: FormGroup;
  isbn:string='';
  name:string='';
  description:string='';

constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.libraryForm = this.formBuilder.group({
      'isbn' : [null, Validators.required],
      'name' : [null, Validators.required],
      'description' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postLibrary(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/library-details', id]); //Resirecciona al detalle
        }, (err) => {
          console.log(err);
        });
  }

}
