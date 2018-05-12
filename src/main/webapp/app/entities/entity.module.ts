import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Moviefan2MovieModule } from './movie/movie.module';
import { Moviefan2GenreModule } from './genre/genre.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Moviefan2MovieModule,
        Moviefan2GenreModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Moviefan2EntityModule {}
