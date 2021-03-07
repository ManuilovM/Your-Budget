import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatMenuHarness } from '@angular/material/menu/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TopComponent } from './top.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { BudgetItemsService } from 'src/app/services/budget-items.service';


/* -------------------------------------------------------------------------- */
/*                                    mocks                                   */
/* -------------------------------------------------------------------------- */

class MockMatDialog { }
class MockAuthService { }
class MockMatSnackBar { }
class MockBudgetItemsService { }

/* -------------------------------------------------------------------------- */
/*                                    tests                                   */
/* -------------------------------------------------------------------------- */

describe('TopComponent mat-menu', () => {
  let fixture: ComponentFixture<TopComponent>;
  let loader: HarnessLoader;
  let comp: TopComponent;

  beforeEach( () => {
     TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        NoopAnimationsModule,
        MatDialogModule,
        MatSnackBarModule,
        MatIconModule,
        HttpClientModule
      ],
      declarations: [
        TopComponent
      ],
      providers: [
        { provider: MatDialog, useClass: MockMatDialog },
        { provider: AuthService, useClass: MockAuthService },
        { provider: MatSnackBar, useClass: MockMatSnackBar },
        { provider: BudgetItemsService, useClass: MockBudgetItemsService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TopComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    comp = fixture.componentInstance;
  });


  it('should load all menu harnesses', (done) => {
    loader.getAllHarnesses(MatMenuHarness).then((menues) => {
      expect(menues.length).toBe(1);
      done();
    });
  });

  it('should get menu text isLogin = true', (done) => {
    comp.isLogin = true;
    loader.getAllHarnesses(MatMenuHarness).then((menues) => {
      menues[0].getTriggerText().then((triggerText)=>{
        expect(triggerText).toBe('logout');
        done();
      })
    });
  });

  it('should get menu text isLogin = false', (done) => {
    comp.isLogin = false;
    loader.getAllHarnesses(MatMenuHarness).then((menues) => {
      menues[0].getTriggerText().then((triggerText)=>{
        expect(triggerText).toBe('login');
        done()
      })
    });
  });

  it('should open and close', (done) => {
    loader.getAllHarnesses(MatMenuHarness).then((menues) => {
      menues[0].isOpen().then((isOpen) => {
        expect(isOpen).toBe(false);
        menues[0].open().then((value) => {
          menues[0].isOpen().then((isOpen) => {
            expect(isOpen).toBe(true);

            menues[0].close().then((value) => {

              menues[0].isOpen().then((isOpen) => {
                expect(isOpen).toBe(false);
                done();
              })
            })
          })

        })
      })
    
    })
    
  });

  it('should get all items', (done) => {
    loader.getAllHarnesses(MatMenuHarness).then((menues) => {
      menues[0].open().then((value) => {
        menues[0].getItems().then((items) => {
          expect(items.length).toBe(2);
          done();

        })
      })
    });

  });


});
