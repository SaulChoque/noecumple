import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainBlockComponent } from './curtain-block.component';

describe('CurtainBlockComponent', () => {
  let component: CurtainBlockComponent;
  let fixture: ComponentFixture<CurtainBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurtainBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtainBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
