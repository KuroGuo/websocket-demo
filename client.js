const WebSocket = require('ws')
const { performance } = require('perf_hooks')

const ws = new WebSocket('ws://192.168.199.205:8080')

ws.on('open', () => {
  ws.send('fuck you server')

  setInterval(() => {
    ws.ping(performance.now())
  }, 3000)
})

ws.on('message', data => {
  console.log(data)
})

ws.on('pong', startTime => {
  console.log('ping: %sms', (performance.now() - startTime).toFixed(2))
})
