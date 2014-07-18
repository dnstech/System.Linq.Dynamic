﻿//Highlight all code snippets
Sunlight.highlightAll();

//Check for and reject all unsupported browsers (http://jreject.turnwheel.com/)
$.reject({
    reject: {
        msie: 9,    //IE:      Reject version 9 and below
        chrome: 26, //Chrome:  Reject version 26 and below
        firefox: 21 //Firefox: Reject version 21 and below
    },
    close: false, //disable close option
    display: ['msie', 'chrome', 'firefox', 'safari'] //set browsers to display and their order
});

//Custom Google Search Code
(function () {
    var cx = '009560997830204618670:m5_ucxqmsyw';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();