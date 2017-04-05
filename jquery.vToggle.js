/**
 * jQuery Plugin to quickly show/hide elements
 */
(function ($) {
    /**
     * Hides an element
     * @returns {jQuery}
     */
    $.fn.vHide = function () {
        if(!this[0]) {
            return this; // the element doesn't exist for some reason
        }

        var l = this.length;
        while (l--) {
            var name = this[l].className || '',
                oldName = name;
            try {
                if(name.indexOf('display-none') == -1) {
                    name += ' display-none';
                }
                name = name
                    .replace(/(?:^|\s)display-block(?!\S)/,'')
                    .replace(/(?:^|\s)display-inline(?!\S)/,'')
                    .replace(/(?:^|\s)display-inline-block(?!\S)/,'');
            } catch(ex) {
                // no classes have been applied yet
                name = 'display-none';
            }
            if (oldName.trim() !== name.trim()) {
                this[l].className = name;
            }
        }

        return this;
    };

    /**
     *
     * @param {type} [type]
     *      - none, inline, inline-block
     * @returns $(element)
     */
    $.fn.vShow = function (type) {
        if(!this[0]) {
            return this; // the element doesn't exist for some reason
        }

        var l = this.length;
        while (l--) {
            var name = this[l].className || '',
                oldName = name;
            try {
                name = name
                    .replace(/(?:^|\s)display-block(?!\S)/,'')
                    .replace(/(?:^|\s)display-inline(?!\S)/,'')
                    .replace(/(?:^|\s)display-inline-block(?!\S)/,'');

                switch(type) {
                    case 'inline':
                        if(name.indexOf('display-inline') == -1) {
                            name += ' display-inline';
                        }
                        break;
                    case 'inline-block':
                        if(name.indexOf('display-inline-block') == -1) {
                            name += ' display-inline-block';
                        }
                        break;
                    default:
                        if(name.indexOf('display-block') == -1) {
                            name += ' display-block';
                        }
                        break;
                }

                name = name.replace(new RegExp('(?:^|\\s)display-none(?!\\S)'),'');
            } catch(ex) {
                // no classes have been applied yet
                name = 'display-block';
            }
            if (oldName.trim() !== name.trim()) {
                this[l].className = name;
            }
        }

        return this;
    };

    /**
     * Shows or hides an element
     * @param arg
     * @returns {jQuery}
     */
    $.fn.vToggle = function (arg) {
        if (arg === true) {
            this.vShow();
        } else if (arg === false) {
            this.vHide();
        } else {
            console.error('argless vToggle not implemented yet');
        }
        return this;
    };
})(jQuery);