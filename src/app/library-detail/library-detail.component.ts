import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.css']
})
export class LibraryDetailComponent implements OnInit {

  library = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    //llama la servicio con parametro obtenido desde la vista (html)
    this.getLibraryDetails(this.route.snapshot.params['id']);
  }

  getLibraryDetails(id) {
    this.api.getLibrary(id)
      .subscribe(data => {
        console.log(data);
        this.library = data;
      });
  }

  deleteLibrary(id) {
    this.api.deleteLibrary(id)
      .subscribe(res => {
          this.router.navigate(['/libraries']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
