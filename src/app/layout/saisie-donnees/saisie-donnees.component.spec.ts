import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieDonneesComponent } from './saisie-donnees.component';

describe('SaisieDonneesComponent', () => {
  let component: SaisieDonneesComponent;
  let fixture: ComponentFixture<SaisieDonneesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieDonneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
