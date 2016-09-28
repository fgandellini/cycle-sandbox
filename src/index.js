import Rx from 'rxjs'
import {run} from '@cycle/rxjs-run'
import {div, makeDOMDriver} from '@cycle/dom'

const main = sources => ({
  DOM: Rx.Observable.of('hello from cycle-sandbox!').map(x => div(x))
})

run(main, { DOM: makeDOMDriver('#app') })