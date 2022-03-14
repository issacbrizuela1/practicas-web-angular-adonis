import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdComponentComponent } from './cmd-component.component';

describe('CmdComponentComponent', () => {
  let component: CmdComponentComponent;
  let fixture: ComponentFixture<CmdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
