import { PocAngularCrudPage } from './app.po';

describe('poc-angular-crud App', () => {
  let page: PocAngularCrudPage;

  beforeEach(() => {
    page = new PocAngularCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
