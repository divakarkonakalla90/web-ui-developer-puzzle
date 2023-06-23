import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookSearchComponent } from './book-search.component';
import { Store, StoreModule } from '@ngrx/store';
import { searchBooks, clearSearch } from '@tmo/books/data-access';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), ReactiveFormsModule, MatIconModule],
      declarations: [BookSearchComponent],
      providers: [FormBuilder]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize searchForm with an empty term', () => {
    expect(component.searchForm.value.term).toBe('');
  });

  it('should dispatch searchBooks action when searchTerm is not empty', () => {
    spyOn(store, 'dispatch');
    const searchTerm = 'javascript';
    component.searchForm.controls.term.setValue(searchTerm);
    component.searchBooks();

    expect(store.dispatch).toHaveBeenCalledWith(searchBooks({ term: searchTerm }));
  });

  it('should dispatch clearSearch action when searchTerm is empty', () => {
    spyOn(store, 'dispatch');
    component.searchBooks();

    expect(store.dispatch).toHaveBeenCalledWith(clearSearch());
  });
});
