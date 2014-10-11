describe('my angular app', function () {
    describe('visiting the home page', function () {
        it('should show me a list of books', function() {
            browser.get('/');
            expect(browser.getPageSource()).toMatch('Welcome to the host application!');
        });
    });
});
