import { MdtFooter } from './table/components/mdt-footer.component';
import { MdtHeader } from './table/components/mdt-header.component';
import { MdtCellAlign } from './table/directives/mdt-cell-align.directive';
import { MdtTable } from './';
import { MdtColumns } from './table/components/mdt-columns.component';
import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


//router
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MdtColumns,
        MdtTable,
        MdtCellAlign,
        MdtHeader,
        MdtFooter
      ],
      imports: [
        MaterialModule,
        FormsModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
