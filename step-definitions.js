let {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Given('Login to the application', () => {
      browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      browser.pause(5000)
      const input = $('#email')
      input.addValue('mohana.nayagam@aspiresys.com')
      const input1 = $('#passwd')
      input1.addValue('Priya@2018')
     //const button1 = $('#decorativeSubmit')
      //button1.click()
       $("//i[@class='icon-lock left']").click();
     //input.addValue('demosalesmanager')
    browser.pause(5000);
    });
    });