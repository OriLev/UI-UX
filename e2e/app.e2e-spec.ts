import { UITestPage } from './app.po';

describe('ui-test App', () => {
  let page: UITestPage;

  beforeEach(() => {
    page = new UITestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
