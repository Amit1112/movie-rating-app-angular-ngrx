import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogComponent } from './add-dialog.component';
import { MaterialModules } from '../../mat-modules.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

describe('AddDialogComponent', () => {
  let component: AddDialogComponent;
  let fixture: ComponentFixture<AddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDialogComponent ],
      imports: [ MaterialModules ],
      providers: [ MatDialogRef, MAT_DIALOG_DATA],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
