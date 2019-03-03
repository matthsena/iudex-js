/**
 * @author Matheus Alexandre de Sena
 * 
 * this script will start after the DOM is complete loaded.
 * ps: You can change this changing readyState to 'loading' or 'interactive'
 *
 */

"use strict"

// GLOBAL VARIABLES

let date;
let browser;

document.addEventListener('readystatechange', () => {

    if (document.readyState === "complete") {

        date = new IudexDate();
        console.log(date.getDate())
        browser = new IudexBrowser();
        console.log(browser.getBrowser());
    }
});

// Class to handle browser info 
class IudexBrowser {
    constructor() {

        // LOCAL VARIABLES
        this.userAgent = window.navigator.userAgent;
        this.language = window.navigator.language;
        this.vendor = window.navigator.vendor;
        this.browser;
    }

    setBrowser() {

        if (this.userAgent.indexOf("Firefox") > -1) {

            this.browser = "Mozilla Firefox";
        } else if (this.userAgent.indexOf("Opera") > -1 || this.userAgent.indexOf("OPR") > -1) {

            this.browser = "Opera";
        } else if (this.userAgent.indexOf("FBAN") > -1 || this.userAgent.indexOf("FBAV") > -1) {

            this.browser = "Facebook Web View";
        } else if (this.userAgent.indexOf("Trident") > -1) {

            this.browser = "Microsoft Internet Explorer";
        } else if (this.userAgent.indexOf("Edge") > -1) {

            this.browser = "Microsoft Edge";
        } else if (this.userAgent.indexOf("Chrome") > -1) {

            this.browser = "Google Chrome";
        } else if (this.userAgent.indexOf("Safari") > -1) {

            this.browser = "Apple Safari";
        } else {

            this.browser = "unknown";
        }
    }

    // Get Browser info
    getBrowser() {
        this.setBrowser();
        
        return {
            browser: this.browser,
            language: this.language,
            userAgent: this.userAgent
        };
    }
}

// Class to handle date
class IudexDate {

    constructor() {

        // LOCAL VARIABLES
        this.datetime;
        this.timezone;
        this.date = new Date();
    }

    // Date time in timestamp
    setDateTime() {

        this.datetime = this.date.getTime();
    }

    // Timezone - difference in minutes (UTC+0)
    setTimeZone() {

        this.timezone = this.date.getTimezoneOffset();
    }

    getDate() {

        this.setDateTime();
        this.setTimeZone();

        return {
            date: this.date,
            datetime: this.datetime,
            timezone: this.timezone
        };
    }
}