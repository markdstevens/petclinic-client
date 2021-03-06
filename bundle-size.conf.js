module.exports = {
  client: [
    {
      name: 'client.js',
      maxSize: '50K'
    },
    {
      name: 'vendors.client*',
      maxSize: '3.2M'
    },
    {
      name: 'main.*.css',
      maxSize: '1K'
    },
    {
      name: 'manifest.json',
      maxSize: '5K'
    },
    {
      name: 'pages-home.client.bundle.*.js',
      maxSize: '5K'
    },
    {
      name: 'precache-manifest.*.js',
      maxSize: '810 bytes'
    },
    {
      name: 'service-worker.js',
      maxSize: '559 b'
    }
  ],
  server: [
    {
      name: 'server.js',
      maxSize: '11Kb'
    },
    {
      name: 'loadable-stats.json',
      maxSize: '5K'
    },
    {
      name: 'manifest.json',
      maxSize: '5K'
    },
    {
      name: 'pages-home.server.bundle.*.js',
      maxSize: '5K'
    }
  ]
};
