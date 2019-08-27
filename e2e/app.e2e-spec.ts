import { OkrPage } from './app.po';

describe('okr App', function() {
  let page: OkrPage;

  beforeEach(() => {
    page = new OkrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
