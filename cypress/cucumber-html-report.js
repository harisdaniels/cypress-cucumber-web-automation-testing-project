const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: 'cypress/report/cucumber-report',
    metadata:{
        browser: {
            name: 'edge',
            version: '94'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    }
});