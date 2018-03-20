import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutes } from './widgets.routing';
import {GetStreamService} from '../services/GetStreamService';
@NgModule({
    imports: [
        RouterModule.forChild(WidgetsRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    providers: [GetStreamService],
    declarations: [WidgetsComponent]
})

export class WidgetsModule {}
