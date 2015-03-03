var objToposort = require('./index.js')

/* using default keys */

var tasks = [
  { id: 'party',      deps: ['shoes','pants','shirt'], data: 'party on!'             },
  { id: 'socks',      deps: [],                        data: 'put on your socks'     },
  { id: 'jacket',     deps: ['shirt'],                 data: 'put on your jacket'    },
  { id: 'shoes',      deps: ['socks'],                 data: 'put on your shoes'     },
  { id: 'underwear',  deps: [],                        data: 'put on your underwear' },
  { id: 'shirt',      deps: [],                        data: 'put on your shirt'     },
  { id: 'pants',      deps: ['underwear'],             data: 'put on your pants'     },
]

objToposort(tasks).forEach(function(task){
  console.log(task.data)
})

/* using custom keys */

var tasks = [
  { name: 'party',      requirements: ['shoes','pants','shirt'], data: 'party on!'             },
  { name: 'socks',      requirements: [],                        data: 'put on your socks'     },
  { name: 'jacket',     requirements: ['shirt'],                 data: 'put on your jacket'    },
  { name: 'shoes',      requirements: ['socks'],                 data: 'put on your shoes'     },
  { name: 'underwear',  requirements: [],                        data: 'put on your underwear' },
  { name: 'shirt',      requirements: [],                        data: 'put on your shirt'     },
  { name: 'pants',      requirements: ['underwear'],             data: 'put on your pants'     },
]

objToposort(tasks, 'name', 'requirements').forEach(function(task){
  console.log(task.data)
})