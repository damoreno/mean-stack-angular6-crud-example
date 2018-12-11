import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptorRequest'

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule } from "@angular/material";
import { LibraryComponent } from './library/library.component';
import { LibraryCreateComponent } from './library-create/library-create.component';
import { LibraryDetailComponent } from './library-detail/library-detail.component';
import { LibraryEditComponent } from './library-edit/library-edit.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'libraries',
    component: LibraryComponent,
    data: { title: 'Library List' }
  },
  {
    path: 'library-details/:id',
    component: LibraryDetailComponent,
    data: { title: 'Library Details' }
  },
  {
    path: 'library-create',
    component: LibraryCreateComponent,
    data: { title: 'Create Library' }
  },
  {
    path: 'library-edit/:id',
    component: LibraryEditComponent,
    data: { title: 'Edit Library' }
  },
  { path: '',
    redirectTo: '/libraries',
    pathMatch: 'full'
  },
  {
    path: 'loginup',
    component: LoginComponent,
    data: { title: 'Login' }
  }


];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    LibraryComponent,
    LibraryCreateComponent,
    LibraryDetailComponent,
    LibraryEditComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor, 
    multi: true
}
  ],
  bootstrap: [AppComponent] //Componente que será llamado al inicio
})
export class AppModule { }
