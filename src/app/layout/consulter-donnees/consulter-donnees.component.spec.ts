import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDonneesComponent } from './consulter-donnees.component';

describe('ConsulterDonneesComponent', () => {
  let component: ConsulterDonneesComponent;
  let fixture: ComponentFixture<ConsulterDonneesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterDonneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
