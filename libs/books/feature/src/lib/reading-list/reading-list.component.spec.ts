import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ReadingListComponent } from './reading-list.component';
import { getReadingList, removeFromReadingList, updateMarkBookAsRead } from '@tmo/books/data-access';
import { of } from 'rxjs';

describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadingListComponent],
      providers: [
        provideMockStore(),
        {
          provide: Store,
          useValue: {
            select: jest.fn().mockReturnValue(of([])),
            dispatch: jest.fn(),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  xit('should dispatch removeFromReadingList action when calling removeFromReadingList', () => {
    const item = { id: 1, title: 'Book 1', authors: ['Author 1'], description: 'Book' };
    component.removeFromReadingList(item);
    expect(store.dispatch).toHaveBeenCalledWith(removeFromReadingList({ item }));
  });

  xit('should dispatch updateMarkBookAsRead action when calling markBookAsRead', () => {
    const item = { id: 1, title: 'Book 1', authors: ['Author 1'], description: 'Book' };
    component.markBookAsRead(item);
    expect(store.dispatch).toHaveBeenCalledWith(updateMarkBookAsRead({ item }));
  });

  it('should initialize readingList$ with the correct value', () => {
    const readingList = [{ id: 1, title: 'Book 1', authors: ['Author 1'], description: 'Book' },
    { id: 2, title: 'Book 2', authors: ['Author 2'], description: 'Book 2' }];
    store.overrideSelector(getReadingList, readingList);
    fixture.detectChanges();
    component.readingList$.subscribe((list) => {
      expect(list).toEqual(readingList);
    });
  });
});
