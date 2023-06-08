import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, addToReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store, private snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.showSnackBar(item);
  }

  showSnackBar(item) {
    this.snackBar
    .open('Book ' + item.title + ' removed from My Reading List', 'Undo', { duration: 5000 })
    .onAction().subscribe(() => {
      this.store.dispatch(addToReadingList({ book: item }));
    });
  }
}
