import 'babel-polyfill'
import express from 'express'
import color from 'chalk'
import renderer from './../../src/helpers/renderr.js'
import webpack from 'webpack'
import config from '../webpack/webpack.server'




const compiler = webpack(config) 
const app = express()
const PORT = process.env.PORT || 3000

const webpackDevMiddleware = require('webpack-dev-middleware')(
	compiler,
	config.devServer
)

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)
const staticMiddleware = express.static('build')

app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)
app.use(staticMiddleware)

// silly example component:

/*
app.get('*', (req, res) => {

    const content = renderer(req)
	
	// send it back wrapped up as an HTML5 document:
	res.send(content)
	/* fs.readFile(paths.appHtmlTemplate) / 'UTF-8',
		(err, data) => {
			if (err) {
				console.log(color.red(err))
				return res.status(500).send(color.bold.red('Some Error Happened'))
			}
			return res.send(
				data.replace(
					'<div id="app"></div>',
					`<div id="app">${ReactDomServer.renderToString(<App />)}</div>`
				)
			)
        } */
        /*
})
*/
app.listen(PORT, () => {
	console.info(
		color.bold.green(`Server started on http://localhost:${PORT} ...`)
	)
})
