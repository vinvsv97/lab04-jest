'use strict';

import * as fs from 'fs'; //import functions for working with file system
const htmlContent = fs.readFileSync('index.html', 'utf-8'); //load the HTML content

/* Your tests go here */
describe('The panic button', function() {

  let $;

  beforeAll(function() {
    //mount the html content
    document.documentElement.innerHTML = htmlContent;

    //run the scripts manually
    $ = require('jquery'); //load the jQuery module (installed from npm)
    window.$ = $; //assign make the jQuery library into a DOM global
    require('../js/index.js');
  });

  it('should exist', function() {
    expect($('#panic-button').length).toBe(1);    
  });

  it('should show an alert when pressed', function() {
    $('#panic-button').click(); //click the button!
    expect($('.alert').hasClass('d-none')).not.toBe(true);
  });
})
