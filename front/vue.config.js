const target = 'http://127.0.0.1:8082';

module.exports = {
   devServer: {
      port: 5000,
      proxy: {
         '^/': {
            target,
            changeOrigin: true
         }
      }
   }
};