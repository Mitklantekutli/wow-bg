import { WowPage } from './app.po';

describe('wow App', () => {
  let page: WowPage;

  beforeEach(() => {
    page = new WowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
