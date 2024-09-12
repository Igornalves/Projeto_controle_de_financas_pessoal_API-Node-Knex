import fastify from 'fastify'

const server = fastify()

server
  .listen({
    port: 3454,
  })
  .then(() => {
    console.log('HTTP server running on port 3454 !!!')
  })
