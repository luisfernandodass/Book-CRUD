import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../models/book.interface';
import { BookControllerService } from '../shared/services/book-controller.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  books: Book[];
  titleIsEmpty = true;

  bookForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private bookControllerService: BookControllerService) { }

  ngOnInit(): void {
    this.bookControllerService.getBooks().subscribe((book: Book[]) => {
      this.books = book;
    });
  }

  validateTitle(): boolean {
    return this.bookForm.get('title')?.value == '' ? this.titleIsEmpty = true : this.titleIsEmpty = false;
  }

  public addBook(): void {
    const title = this.bookForm.get('title')?.value;
    const description = this.bookForm.get('description')?.value;
    this.bookControllerService.addBook(title, description).subscribe((book: Book[]) => {
      this.books = book;
      window.location.reload();
    });
  }

}
