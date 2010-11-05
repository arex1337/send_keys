/*
 * send_keys (0.1)
 * by T. Alexander Lystad (tal@lystadonline.no)
 *
 * This plugin will emulate typing of the input string into one or several
 * text fields (<input type="text" /> or <textarea></textarea>).
 * The plugin does this by iterating throught the input string and setting the
 * elements value character by character while triggering the proper keyboard
 * events.
 *
 * Copyright (c) 2010 T. Alexander Lystad <tal@lystadonline.no>
 * Licensed under the GPL license, see http://www.gnu.org/licenses/gpl-3.0.html
 *
 * NOTE: This script requires jQuery to work. Download jQuery at jquery.com
 *
 */
(function($) {
    $.fn.send_keys = function(string) {
        return this.each(function() {
            element = $(this);
            if (element.is('input[type=text]') || element.is('textarea')) {
                $.each(string, function(key, val) {
                    element.keydown();
                    element.keypress();
                    element.val(element.val() + val);
                    element.keyup();
                });
            }
        });
    };
})(jQuery);