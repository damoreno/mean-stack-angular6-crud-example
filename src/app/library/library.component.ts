import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libraries: any;
  displayedColumns = ['isbn', 'name', 'description'];
  dataSource = new LibraryDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLibraries()
      .subscribe(res => {
        console.log(res);
        this.libraries = res;
      }, err => {
        console.log(err);
      });
  }
}

export class LibraryDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getLibraries();
  }

  disconnect() {

  }
}
