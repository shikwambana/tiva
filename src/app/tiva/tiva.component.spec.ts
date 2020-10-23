import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TivaComponent } from './tiva.component';

describe('TivaComponent', () => {
  let component: TivaComponent;
  let fixture: ComponentFixture<TivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
