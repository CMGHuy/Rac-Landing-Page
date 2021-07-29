import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderUploadFileComponent } from './loader-upload-file.component';

describe('LoaderUploadFileComponent', () => {
  let component: LoaderUploadFileComponent;
  let fixture: ComponentFixture<LoaderUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
