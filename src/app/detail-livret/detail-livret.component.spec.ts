import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLivretComponent } from './detail-livret.component';

describe('DetailLivretComponent', () => {
  let component: DetailLivretComponent;
  let fixture: ComponentFixture<DetailLivretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLivretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLivretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
