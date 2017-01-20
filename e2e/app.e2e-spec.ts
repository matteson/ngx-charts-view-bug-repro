import { ReproPage } from './app.po';

describe('repro App', function() {
  let page: ReproPage;

  beforeEach(() => {
    page = new ReproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
