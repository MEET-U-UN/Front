module.exports = {
  "css": {
    "loaderOptions": {
      "scss": {
        "prependData": "\n          @import \"@/styles/global.scss\";\n        "
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}