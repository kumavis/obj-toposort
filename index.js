var toposort = require('toposort')

module.exports = objToposort

function objToposort(elements) {
  // parse out graph nodes and edges from listed deps
  var nodes = []
  var edges = []
  for (var name in elements) {
    var element = elements[name]
    nodes.push(name)
    var deps = element[0]
    for (var i in deps) {
      var dep = deps[i]
      // read as "name requires dep"
      edges.push([name, dep])
    }
  }
  // calculate ordered nodes
  var orderedNames = toposort.array(nodes, edges).reverse()
  // map orderedNames to data
  var results = []
  for (var i in orderedNames) {
    var name = orderedNames[i]
    var element = elements[name]
    var data = element[1]
    results.push(data)
  }
  return results
}