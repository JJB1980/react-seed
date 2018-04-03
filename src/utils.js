import fetch from 'cross-fetch'

import {development} from './config.json'

export function location (props, route) {
  return props.location && props.location.pathname && props.location.pathname.match(route)
}

export function fetchUtil (uri, method, token, body) {
  return fetch(`${development.host}${uri}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: body ? JSON.stringify(body) : null
  })
}

export function bindDom(callback) {
  return (event) => {
    return callback(event.target.value)
  }
}