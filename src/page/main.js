import Rx from 'rxjs'
import {div} from '@cycle/dom'

const MainPage = sources => ({
  DOM: Rx.Observable.of('hello from cycle-sandbox main page!').map(x => div(x))
})

module.exports = { MainPage }