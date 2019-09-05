import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContainerComponent } from './container.component';
import { MaterialModules } from '../../mat-modules.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../core/header/header.component';
import { MovieSortPipe } from '../pipes/movie-sort.pipe';
import { Store } from '@ngrx/store';

describe('ContainerComponent', () => {
  let component: MovieContainerComponent;
  let fixture: ComponentFixture<MovieContainerComponent>;
  const testStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieContainerComponent , HeaderComponent, MovieSortPipe],
      imports: [ MaterialModules ],
      providers: [{ provide: Store, useValue: testStore }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
