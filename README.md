# jQuery.vToggle
The fastest jQuery plugin for showing/hiding elements.

This is meant to be a drop in replacement for jQuery's `.show()` and `.hide()`.
## Installation
Install the latest version:    

    npm install jquery.vtoggle
## Usage
`vShow()` will show the selected element(s) as display block by adding a special class called `display-block`.
``` js
  $('.selector').vShow();
```
You can pass `inline-block` and `inline` as optional parameters to vShow to control the way the element will display
``` js
  $('.selector').vShow('inline'); // will display the element as inline
```

To hide elements, simply call `.vHide()`
``` js
  $('.selector').vHide();
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
## History
Version 1.0.0 - Initial commit
## Credits
Thanks to the Grey Wall Software team!
