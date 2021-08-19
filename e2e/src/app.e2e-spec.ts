import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should display Saved successfully!', () => {
    page.navigateTo();
    page.setfrom();
    page.setTo();
    page.setAmount();
    page.getSubmitButton().click();
    // browser.pause();
    expect(page.getResponse()).toEqual('Saved successfully!');
  });

  it('should display already found', () => {
    page.navigateTo();
    page.setfrom();
    page.setTo();
    page.setAmount();
    page.getSubmitButton().click();
    // browser.pause();
    expect(page.getResponse()).toEqual('already found');
  });


  it('should display requird fields', () => {
    page.navigateTo();
    page.setfrom();
    page.getSubmitButton().click();
    // browser.pause();
    expect(page.getResponse()).toEqual('requird fields');
  });

  it('should navigate to requests lits', () => {
    page.navigateTo();
    page.showRequests().click();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
