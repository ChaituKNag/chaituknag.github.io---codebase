import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props
    const rootPath = `${ __PATH_PREFIX__ }/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            paddingTop: rhythm(1.5)
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{

            marginTop: 0,
            display: 'flex',
            justifyContent: 'space-between',
            padding: `${ rhythm(1) } 0`,
            boxShadow: `rgba(0, 0, 0, 0.1) 0px 9px 13px -10px`,
            position: `sticky`,
            top: `0px`,
            background: `white`
          }}
        >
          {title}
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          > Home </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `0 ${ rhythm(3 / 4) } ${ rhythm(1.5) }`,
        }}
      >
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()} -- with
          <span style={{ color: 'red' }}>❤</span>
          from Naga Chaitanya Konada.
        </footer>
      </div>
    )
  }
}

export default Layout
