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

document.addEventListener('readystatechange', () => {

    if (document.readyState === "complete") {

        date = new IudexDate();
        console.log(date.getDate())
    }
});


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