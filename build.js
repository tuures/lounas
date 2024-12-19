import ReactDOMServer from 'react-dom/server'

import {Lounas} from './src/Lounas.jsx'

const htmlDoctype = '<!DOCTYPE html>'

const pageHtml = htmlDoctype + ReactDOMServer.renderToStaticMarkup(<Lounas/>)

console.log(pageHtml)
