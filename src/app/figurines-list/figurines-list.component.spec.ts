import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurinesListComponent } from './figurines-list.component';

describe('FigurinesListComponent', () => {
  let component: FigurinesListComponent;
  let fixture: ComponentFixture<FigurinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigurinesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigurinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
