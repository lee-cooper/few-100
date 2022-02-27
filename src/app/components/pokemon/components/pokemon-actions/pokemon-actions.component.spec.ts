import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonActionsComponent } from './pokemon-actions.component';

describe('PokemonActionsComponent', () => {
  let component: PokemonActionsComponent;
  let fixture: ComponentFixture<PokemonActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
