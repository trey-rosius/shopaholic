import Vue from "vue"

Vue.filter("dollar", function(value) {
  // Using a template literal here, that's why there are two dollar signs.
  // The first is an actual dollar.
  //.toFixed(2)
  //return `XAF ${parseInt(value).toFixed(2)}`
  return `XAF ${value}`
})
