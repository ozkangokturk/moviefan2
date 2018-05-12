package com.ozkangokturk.moviefan2.service.impl;

import com.ozkangokturk.moviefan2.service.GenreService;
import com.ozkangokturk.moviefan2.domain.Genre;
import com.ozkangokturk.moviefan2.repository.GenreRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing Genre.
 */
@Service
@Transactional
public class GenreServiceImpl implements GenreService {

    private final Logger log = LoggerFactory.getLogger(GenreServiceImpl.class);

    private final GenreRepository genreRepository;

    public GenreServiceImpl(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    /**
     * Save a genre.
     *
     * @param genre the entity to save
     * @return the persisted entity
     */
    @Override
    public Genre save(Genre genre) {
        log.debug("Request to save Genre : {}", genre);
        return genreRepository.save(genre);
    }

    /**
     * Get all the genres.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Genre> findAll(Pageable pageable) {
        log.debug("Request to get all Genres");
        return genreRepository.findAll(pageable);
    }

    /**
     * Get one genre by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Genre findOne(Long id) {
        log.debug("Request to get Genre : {}", id);
        return genreRepository.findOne(id);
    }

    /**
     * Delete the genre by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Genre : {}", id);
        genreRepository.delete(id);
    }
}
