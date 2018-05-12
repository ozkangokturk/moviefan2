import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Moviefan2SharedModule } from '../../shared';
import {
    MovieService,
    MoviePopupService,
    MovieComponent,
    MovieDetailComponent,
    MovieDialogComponent,
    MoviePopupComponent,
    MovieDeletePopupComponent,
    MovieDeleteDialogComponent,
    movieRoute,
    moviePopupRoute,
    MovieResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...movieRoute,
    ...moviePopupRoute,
];

@NgModule({
    imports: [
        Moviefan2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        MovieComponent,
        MovieDetailComponent,
        MovieDialogComponent,
        MovieDeleteDialogComponent,
        MoviePopupComponent,
        MovieDeletePopupComponent,
    ],
    entryComponents: [
        MovieComponent,
        MovieDialogComponent,
        MoviePopupComponent,
        MovieDeleteDialogComponent,
        MovieDeletePopupComponent,
    ],
    providers: [
        MovieService,
        MoviePopupService,
        MovieResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Moviefan2MovieModule {}
