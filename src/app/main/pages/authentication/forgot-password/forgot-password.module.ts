import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
} from '@angular/material';

import { FuseSharedModule } from 'theme/shared.module';

import { ForgotPasswordComponent } from 'app/main/pages/authentication/forgot-password/forgot-password.component';

const routes = [
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    }
];

@NgModule({
    declarations: [ForgotPasswordComponent],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule
    ]
})
export class ForgotPasswordModule {}
