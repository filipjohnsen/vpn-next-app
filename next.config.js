module.exports = {
    async rewrites() {
        return [
          {
            source: '/go/:slug/:subid',
            destination: '/api/go/:slug/:subid'
          },
        ]
      },
}