import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningBlockComponent } from './opening-block.component';

describe('OpeningBlockComponent', () => {
  let component: OpeningBlockComponent;
  let fixture: ComponentFixture<OpeningBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
