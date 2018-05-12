package com.ozkangokturk.moviefan2.service;

import com.ozkangokturk.moviefan2.domain.Genre;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing Genre.
 */
public interface GenreService {

    /**
     * Save a genre.
     *
     * @param genre the entity to save
     * @return the persisted entity
     */
    Genre save(Genre genre);

    /**
     * Get all the genres.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Genre> findAll(Pageable pageable);

    /**
     * Get the "id" genre.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Genre findOne(Long id);

    /**
     * Delete the "id" genre.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
