import fetch from 'cross-fetch'

export function location (props, route) {
  return props.location && props.location.pathname && props.location.pathname.indexOf(route) >= 0
}

export function fetchUtil (uri, body) {
  return fetch(`http://localhost:8081/${uri}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}