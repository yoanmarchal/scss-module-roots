[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fyoanmarchal%2Fscss-module-roots.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fyoanmarchal%2Fscss-module-roots?ref=badge_shield)

installation 
===================
With bower
```
bower install --save scss-module-roots
```

add to bower.json
```
"overrides": {
    "bootstrap-sass": {
      "main": [
        "assets/stylesheets/_bootstrap.scss",
        "assets/fonts/bootstrap/*",
        "assets/javascripts/bootstrap.js"
      ]
    },
    "isotope": {
      "main": [
        "./dist/isotope.pkgd.min.js"
      ],
      "dependencies": {
        "get-size": ">=1.1.8 <1.3",
        "matches-selector": ">=1 <2",
        "outlayer": "1.3.x",
        "masonry": "3.2.x"
      }
    },
    "outlayer": {
      "main": [
        "item.js",
        "outlayer.js"
      ]
    }
  },
```



## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fyoanmarchal%2Fscss-module-roots.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fyoanmarchal%2Fscss-module-roots?ref=badge_large)