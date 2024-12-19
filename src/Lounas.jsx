import {restaurants} from './restaurants.js'

const qoogleAnalytics = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TSW7H0B1VP');
  `.replace(/(^|\n)\s+/g, '')

const Html = ({children}) => (
  <html lang='fi'>
    <head>
      <meta charSet='utf-8'/>
      <meta name='google' content='notranslate'/>
      <title>lounas</title>
      <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'/>
      <link href='style.css' rel='stylesheet'/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-TSW7H0B1VP"></script>
      <script
        dangerouslySetInnerHTML={{__html: qoogleAnalytics}}
      />
    </head>
    <body>
      {children}
    </body>
  </html>
)

const Wrapper = ({children}) => (
  <div className='wrapper'>
    {children}
  </div>
)

const Header = () => (
  <div className='header'>
    <Wrapper>
      <span className='title'>
        🍕 <a href='/' className='link'>lounas<span>.surge.sh</span></a>
      </span>
      {' '}
      <span className='github'>
        <a href='https://github.com/tuures/lounas' className='link'>
        fork on github 🍴
        </a>
      </span>
    </Wrapper>
  </div>
)

const Restaurants = ({restaurants}) => (
  <ul className='list'>
    {restaurants.map((r, index) => (
      <li key={index} className='item'>
        <a href={r[1]} className='link'>{r[0]}</a>
      </li>
    ))}
  </ul>
)

export const Lounas = () => (
  <Html>
    <Header/>
    <div className='main'>
      <Wrapper>
        <Restaurants restaurants={restaurants}/>
      </Wrapper>
    </div>
  </Html>
)
