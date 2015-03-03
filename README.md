# obj-toposort

### Sort objects with dependencies

Sort an array of objects so the dependencies are handled first.
```js
var objToposort = require('obj-toposort')

/* using default keys */

var tasks = [
  { id: 'party':      deps: ['shoes','pants','shirt'], data: 'party on!'             },
  { id: 'socks':      deps: [],                        data: 'put on your socks'     },
  { id: 'jacket':     deps: ['shirt'],                 data: 'put on your jacket'    },
  { id: 'shoes':      deps: ['socks'],                 data: 'put on your shoes'     },
  { id: 'underwear':  deps: [],                        data: 'put on your underwear' },
  { id: 'shirt':      deps: [],                        data: 'put on your shirt'     },
  { id: 'pants':      deps: ['underwear'],             data: 'put on your pants'     },
]

objToposort(tasks).forEach(function(task){
  console.log(task.data)
})
```

result:
```
put on your underwear
put on your pants
put on your shirt
put on your socks
put on your shoes
put on your jacket
party on!
```


### custom keys
You can also use custom keys.
```js
var objToposort = require('obj-toposort')

var tasks = [
  { name: 'party':      requirements: ['shoes','pants','shirt'], data: 'party on!'             },
  { name: 'socks':      requirements: [],                        data: 'put on your socks'     },
  { name: 'jacket':     requirements: ['shirt'],                 data: 'put on your jacket'    },
  { name: 'shoes':      requirements: ['socks'],                 data: 'put on your shoes'     },
  { name: 'underwear':  requirements: [],                        data: 'put on your underwear' },
  { name: 'shirt':      requirements: [],                        data: 'put on your shirt'     },
  { name: 'pants':      requirements: ['underwear'],             data: 'put on your pants'     },
]

objToposort(tasks, 'name', 'requirements').forEach(function(task){
  console.log(task.data)
})
```


### Errors

The following cyclic dependencies will throw errors.
```js
var objToposort = require('./index.js')

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
```