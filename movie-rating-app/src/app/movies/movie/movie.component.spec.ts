import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { MaterialModules } from '../../mat-modules.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  const testStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComponent ],
      imports: [ MaterialModules ],
      providers: [MatDialog,
        { provide: Store, useValue: testStore }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
