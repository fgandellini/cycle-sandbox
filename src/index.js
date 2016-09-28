import Rx from 'rxjs'
import switchPath from 'switch-path'
import {run} from '@cycle/rxjs-run'
import {div, makeDOMDriver} from '@cycle/dom'
import {createHistory} from 'history'
import {makeRouterDriver} from 'cyclic-router'

import {MainPage} from './page/main'

const main = sources => {
  const match$ = sources.router.define({
    '/': MainPage,
  })

  const page$ = match$.map(({path, value}) =>
    value(Object.assign({}, sources, {
      router: sources.router.path(path)
    }))
  )

  return {
    DOM: page$.flatMap(c => c.DOM),
    router: Rx.Observable.of('/'),
  }
}

run(main, { 
  DOM: makeDOMDriver('#app'),
  router: makeRouterDriver(createHistory(), switchPath),
})