# obj-toposort

### Sort objects with dependencies

```js
var objToposort = require('./index.js')

var tasks = {
  'party':      [ ['shoes','pants','shirt'], { message: 'party on!' }             ],
  'socks':      [ [],                        { message: 'put on your socks' }     ],
  'jacket':     [ ['shirt'],                 { message: 'put on your jacket' }    ],
  'shoes':      [ ['socks'],                 { message: 'put on your shoes' }     ],
  'underwear':  [ [],                        { message: 'put on your underwear' } ],
  'shirt':      [ [],                        { message: 'put on your shirt' }     ],
  'pants':      [ ['underwear'],             { message: 'put on your pants' }     ],
}

objToposort(tasks).forEach(function(task){
  console.log(task.message)
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