/**
 * jQuery toHTML
 *
 * @fileoverview
 * @link https://github.com/maxjbo/jquery-tohtml
 * @author Maxime Gibeau
 * @version 0.1.1
 * @requires jQuery 1.4.4+
 * @license jQuery toHTML Plug-In
 *
 * Copyright 2013, Maxime Gibeau
 * Licensed under the MIT license.
 * <https://raw.github.com/mgibeau/jquery-tohtml/master/MIT-LICENSE.txt>
 */

jQuery.fn.extend({
    toHTML: function(flat) {
        var $this = $(this);

        if (!flat && $this.length > 1) {
            var elems = []

            this.each(function() {
                elems.push($('<div>').append($(this).clone()).html());
            })

            return elems;
        } else {
            return $('<div>').append($(this).clone()).html();
        }
    }
});
