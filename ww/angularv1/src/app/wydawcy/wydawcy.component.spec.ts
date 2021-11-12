import { ComponentFixture, TestBed } from '@angular/core/testing';
import  wydawcy  from '../../assets/wydawcy.json'
import { WydawcyComponent } from './wydawcy.component';

describe('WydawcyComponent', () => {
  let component: WydawcyComponent;
  let fixture: ComponentFixture<WydawcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WydawcyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WydawcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
