import { A2todoPage } from './app.po';

describe('a2todo App', () => {
  let page: A2todoPage;

  beforeEach(() => {
    page = new A2todoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
