import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule
} from '@angular/material';
import { FuseSharedModule } from 'theme/shared.module';
import { DirectoresRoutingModule } from './directores-routing.module';
import { DirectoresComponent } from './directores.component';


@NgModule({
    declarations: [DirectoresComponent],
    imports: [
        CommonModule,
        DirectoresRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        FuseSharedModule
    ]
})
export class DirectoresModule {}
