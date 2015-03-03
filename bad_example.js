var objToposort = require('./index.js')

/*
**
** The following cyclic dependencies will throw errors
**
*/

/* self dependency */

var tasks = [
  { id: 'a',      deps: ['a'], },
]

try {
  objToposort(tasks).forEach(function(task){ console.log(task.id) })
} catch (error) {
  console.error(error)
}


/* cyclic dependency */

var tasks = [
  { id: 'a',      deps: ['b'], },
  { id: 'b',      deps: ['a'], },
]

try {
  objToposort(tasks).forEach(function(task){ console.log(task.id) })
} catch (error) {
  console.error(error)
}