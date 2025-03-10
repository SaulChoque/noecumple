import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBlockComponent } from './scroll-block.component';

describe('ScrollBlockComponent', () => {
  let component: ScrollBlockComponent;
  let fixture: ComponentFixture<ScrollBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
