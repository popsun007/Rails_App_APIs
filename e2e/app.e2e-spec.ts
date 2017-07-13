import { Ng2AppPage } from './app.po';

describe('ng2-app App', () => {
  let page: Ng2AppPage;

  beforeEach(() => {
    page = new Ng2AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
