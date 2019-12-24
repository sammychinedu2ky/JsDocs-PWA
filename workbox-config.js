module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{png,html,txt,json,markdown,css,js}"
  ],
  "swDest": "sw.js",
  "swSrc": "swconfig.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};