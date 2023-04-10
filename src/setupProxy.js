const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use('/blog',createProxyMiddleware({
        target:'http://localhost:9090',
        changeOrigin:true,
		pathRewrite:{
			'^/blog':''
		}
    }))
}