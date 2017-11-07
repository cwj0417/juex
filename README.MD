# juex
> juex is a vue's state manage lib with core functionality of vuex.

## usage
```js
import juex from 'juex'
import Vue from 'vue'

Vue.use(juex)
new Vue({
    store: new juex.Store({
        state: []
    })
})
```