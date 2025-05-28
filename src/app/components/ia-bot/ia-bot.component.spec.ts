import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaBotComponent } from './ia-bot.component';

describe('IaBotComponent', () => {
  let component: IaBotComponent;
  let fixture: ComponentFixture<IaBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IaBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
