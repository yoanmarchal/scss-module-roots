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

