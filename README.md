# Iudex.js

> Iudex.js is a Framework for you to understand and judge your web
> application user.

[ ![Open Issues](https://img.shields.io/github/issues-raw/matthsena/iudex-js.svg)](https://github.com/matthsena/iudex-js/issues)

with iudex you can do a more detailed analysis of the user of your web pages, obtaining information related to:

- **Browser**
- **Clicks** *(in the future)*
 - **Date**
 - **Device** 
 - **Network** *(in the future)*
 - **Geolocation** *(in the future)*
 - **Scroll**
 - *loading...*

## Browser
Browser is the class responsible for getting information from the browser, you are currently only getting some information:
- **Browser name** *(e.g. Mozilla Firefox)*
- **User Agent**
- **Language** 
- *loading...*

### Sample

    let browser = new IudexBrowser();
    console.log(browser.getBrowser());

## Date

Data is the simplest class, it returns only some basic information, but important for analysis:

- **Date** *(Date( ) value)*
- **Date Time** *(Timestamp)*
- **Timezone** *(Difference in minutes UTC+0)* 

### Sample

    let date  =  new  IudexDate();
    console.log(date.getDate());


## Device

Device is the most incredible class and maybe it will be your favorite, it is possible to obtain incredible information that will surely help you:

- **Brand** *(Mobile devices only, e.g. Apple)*
- **Logical processors available  or 'core'** 
- **Operating System or 'OS'**
- **OS Version** *(Mobile devices only)*
- **RAM Memory** *(Supported only in google chrome)*
- **Screen Width**
- **Screen Height**
- *loading...*

### Sample

    let device = new IudexDevice();
    console.log(device.getDevice());
