import {Link, routes} from '@redwoodjs/router'

const NavbarLayout = ({ children }) => {
  return <>
    <header>
      <h1>Gacha Nose</h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.saved()}>Saved</Link>
          </li>
          <li>
            <Link to={routes.calc()}>Calculate!</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
}

export default NavbarLayout
