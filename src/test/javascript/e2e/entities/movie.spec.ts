import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Movie e2e test', () => {

    let navBarPage: NavBarPage;
    let movieDialogPage: MovieDialogPage;
    let movieComponentsPage: MovieComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Movies', () => {
        navBarPage.goToEntity('movie');
        movieComponentsPage = new MovieComponentsPage();
        expect(movieComponentsPage.getTitle())
            .toMatch(/Movies/);

    });

    it('should load create Movie dialog', () => {
        movieComponentsPage.clickOnCreateButton();
        movieDialogPage = new MovieDialogPage();
        expect(movieDialogPage.getModalTitle())
            .toMatch(/Create or edit a Movie/);
        movieDialogPage.close();
    });

    it('should create and save Movies', () => {
        movieComponentsPage.clickOnCreateButton();
        movieDialogPage.setTitleInput('title');
        expect(movieDialogPage.getTitleInput()).toMatch('title');
        movieDialogPage.setRatingInput('rating');
        expect(movieDialogPage.getRatingInput()).toMatch('rating');
        movieDialogPage.setDirectorInput('director');
        expect(movieDialogPage.getDirectorInput()).toMatch('director');
        // movieDialogPage.genreSelectLastOption();
        movieDialogPage.save();
        expect(movieDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class MovieComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-movie div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getText();
    }
}

export class MovieDialogPage {
    modalTitle = element(by.css('h4#myMovieLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    titleInput = element(by.css('input#field_title'));
    ratingInput = element(by.css('input#field_rating'));
    directorInput = element(by.css('input#field_director'));
    genreSelect = element(by.css('select#field_genre'));

    getModalTitle() {
        return this.modalTitle.getText();
    }

    setTitleInput = function(title) {
        this.titleInput.sendKeys(title);
    };

    getTitleInput = function() {
        return this.titleInput.getAttribute('value');
    };

    setRatingInput = function(rating) {
        this.ratingInput.sendKeys(rating);
    };

    getRatingInput = function() {
        return this.ratingInput.getAttribute('value');
    };

    setDirectorInput = function(director) {
        this.directorInput.sendKeys(director);
    };

    getDirectorInput = function() {
        return this.directorInput.getAttribute('value');
    };

    genreSelectLastOption = function() {
        this.genreSelect.all(by.tagName('option')).last().click();
    };

    genreSelectOption = function(option) {
        this.genreSelect.sendKeys(option);
    };

    getGenreSelect = function() {
        return this.genreSelect;
    };

    getGenreSelectedOption = function() {
        return this.genreSelect.element(by.css('option:checked')).getText();
    };

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
