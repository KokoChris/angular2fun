import { UdemyAng2Page } from './app.po';

describe('udemy-ang2 App', () => {
  let page: UdemyAng2Page;

  beforeEach(() => {
    page = new UdemyAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
