import { BaseEntity } from './../../shared';

export class Movie implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public rating?: string,
        public director?: string,
        public genres?: BaseEntity[],
    ) {
    }
}
