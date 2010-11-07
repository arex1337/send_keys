send_keys
====================

Important links
---------------------
* [Home page / Source](https://github.com/arex1337/send_keys/)
* [Issues / Bug tracker / Suggest improvements](https://github.com/arex1337/send_keys/issues)
* [Wiki](https://github.com/arex1337/send_keys/wiki)

Feel free to contact me at [tal@lystadonline.no](mailto:tal@lystadonline.no)


Description
---------------------
This jQuery plugin will emulate typing of the input string into one or several
text fields (<input type="text" /> or <textarea></textarea>). The plugin does
this by iterating throught the input string and setting the elements value
character by character while triggering the proper keyboard events.


Installation
---------------------
Download the .js file in [the lib directory](https://github.com/arex1337/send_keys/tree/master/lib/) and put it in your page.  
<script type="text/javascript" src="jquery.send_keys-XXX.js"></script>  
You're ready to go.

Usage
---------------------
`$('#someInputId').send_keys('hello');` Will type 'hello' in the element with id="someInputId", provided that the element in a text input or a textarea
`$('textarea').send_keys('world');` Will type 'world' in all <textarea>s on the page


Tests
---------------------
In [the tests directory](https://github.com/arex1337/send_keys/tree/master/tests/) you will find [QUnit](http://docs.jquery.com/QUnit) based unit tests.


License
---------------------
Copyright (c) 2010 T. Alexander Lystad <tal@lystadonline.no>
Licensed under the GPL license, see http://www.gnu.org/licenses/gpl-3.0.html