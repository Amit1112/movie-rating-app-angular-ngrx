import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieComponent } from './add-movie.component';
import { MaterialModules } from '../../mat-modules.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;
  const testStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieComponent ],
      imports: [ MaterialModules, FormsModule ],
      providers: [ MatDialogModule,
        { provide: Store, useValue: testStore } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
