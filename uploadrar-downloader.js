// ==UserScript==
// @name         UploadRAR Auto Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A script that automatically forwards page to download page and download the file for you.
// @author       Zia Rahman
// @match        https://uploadrar.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=uploadrar.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.clear(); // clear errors

    // array of elements objects that are found in each page
    const elements = [
        {
            page:1,
            class:'.mngez-free-download',
        },
        {
            page:2,
            class:'.downloadbtn',
        },
        {
            page:3,
            class:'#direct_link > a'
        }
    ];

    setTimeout(function () {
        elements.map(function(element, index) {
            const button = document.querySelector(element.class);
            (button != null ) ? button.click():'' // if button is not null, click
        });
    }, 1500); // introduce 1.5 seconds delay for timers
})();
