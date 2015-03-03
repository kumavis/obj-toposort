var toposort = require('toposort')

module.exports = objToposort

function objToposort(elements, idKey, depsKey) {
  idKey = idKey || 'id'
  depsKey = depsKey || 'deps'
  // parse out graph nodes and edges from listed deps
  var nodes = []
  var edges = []
  var idMap = {}
  for (var index in elements) {
    var element = elements[index]
    var id = element[idKey]
    idMap[id] = element
    nodes.push(id)
    var deps = element[depsKey] || []
    for (var index2 in deps) {
      var depId = deps[index2]
      // read as "name requires dep"
      edges.push([id, depId])
    }
  }
  // calculate ordered nodes
  var orderedIds = toposort.array(nodes, edges).reverse()
  // map orderedIds to data
  var results = []
  for (var index in orderedIds) {
    var id = orderedIds[index]
    var element = idMap[id]
    results.push(element)
  }
  return results
}