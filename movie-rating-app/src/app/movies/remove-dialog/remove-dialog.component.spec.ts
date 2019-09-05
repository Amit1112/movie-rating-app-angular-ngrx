import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDialogComponent } from './remove-dialog.component';
import { MaterialModules } from '../../mat-modules.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DialogComponent } from '../../core/dialog/dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

describe('RemoveDialogComponent', () => {
  let component: RemoveDialogComponent;
  let fixture: ComponentFixture<RemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveDialogComponent,
        DialogComponent],
      imports: [ MaterialModules ],
      providers: [ MatDialogRef, MAT_DIALOG_DATA ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
