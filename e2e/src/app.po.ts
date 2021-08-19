import { browser, By, by, element, until } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-request-form h2')).getText() as Promise<string>;
  }

  getSubmitButton(): any {
    return element(by.buttonText('Submit'));

  }

  getResponse(): any {
    const snackbar = browser.driver.wait(until.elementLocated(By.tagName('simple-snack-bar')), 10000);

    return snackbar.getText();
  }

  setfrom(): any {
    const codes = ['HRK', 'HTG', 'HUF', 'IDR',
      'ILS',
      'IMP',
      'INR'];
    return element(by.id('from')).sendKeys(codes[0]);
  }

  setTo(): any {
    return element(by.id('to')).sendKeys('USD');
  }

  setAmount(): any {
    return element(by.id('Amount')).sendKeys(50);
  }
  showRequests(): any {
    return element(by.css('[routerLink="requests"]'));
  }
}
