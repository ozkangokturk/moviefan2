import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Moviefan2SharedModule } from '../../shared';
import {
    GenreService,
    GenrePopupService,
    GenreComponent,
    GenreDetailComponent,
    GenreDialogComponent,
    GenrePopupComponent,
    GenreDeletePopupComponent,
    GenreDeleteDialogComponent,
    genreRoute,
    genrePopupRoute,
    GenreResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...genreRoute,
    ...genrePopupRoute,
];

@NgModule({
    imports: [
        Moviefan2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        GenreComponent,
        GenreDetailComponent,
        GenreDialogComponent,
        GenreDeleteDialogComponent,
        GenrePopupComponent,
        GenreDeletePopupComponent,
    ],
    entryComponents: [
        GenreComponent,
        GenreDialogComponent,
        GenrePopupComponent,
        GenreDeleteDialogComponent,
        GenreDeletePopupComponent,
    ],
    providers: [
        GenreService,
        GenrePopupService,
        GenreResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Moviefan2GenreModule {}
