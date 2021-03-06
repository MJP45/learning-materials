import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";
import { AppRoutingModule } from 'src/app/app-routing.module';

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [AppRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
