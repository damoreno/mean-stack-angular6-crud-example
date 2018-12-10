import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-library-edit',
  templateUrl: './library-edit.component.html',
  styleUrls: ['./library-edit.component.css']
})
export class LibraryEditComponent implements OnInit {

    libraryForm: FormGroup;
    id:string = '';
    isbn:string = '';
    name:string = '';
    description:string = '';

    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.getLibrary(this.route.snapshot.params['id']);
      this.libraryForm = this.formBuilder.group({
        'isbn' : [null, Validators.required],
        'name' : [null, Validators.required],
        'description' : [null, Validators.required]
      });
    }

    getLibrary(id) {
      this.api.getLibrary(id).subscribe(data => {
        this.id = data._id;
        this.libraryForm.setValue({
          isbn: data.isbn,
          name: data.name,
          description: data.description
        });
      });
    }

    onFormSubmit(form:NgForm) {
      this.api.updateLibrary(this.id, form)
        .subscribe(res => {
            let id = res['_id'];
            this.router.navigate(['/library-details', id]);
          }, (err) => {
            console.log(err);
          }
        );
    }

    libraryDetails() {
      this.router.navigate(['/library-details', this.id]);
    }
  }
