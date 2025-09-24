import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from '../components/shared/Container'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-18">
          <Link
            to="/"
            className="text-lg font-semibold text-sr-text-primary hover:text-sr-text-secondary transition-colors"
          >
            Spectrum Research Library
          </Link>

          <nav className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive
                  ? 'text-sr-text-primary font-semibold border-b-2 border-sr-text-primary pb-1'
                  : 'text-sr-text-secondary hover:text-sr-text-primary transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/challenges/coming-out-anxiety"
              className={({isActive}) =>
                isActive || pathname.startsWith('/challenges')
                  ? 'text-sr-text-primary font-semibold border-b-2 border-sr-text-primary pb-1'
                  : 'text-sr-text-secondary hover:text-sr-text-primary transition-colors'
              }
            >
              Challenge
            </NavLink>
            <NavLink
              to="/supports"
              className={({isActive}) =>
                isActive
                  ? 'text-sr-text-primary font-semibold border-b-2 border-sr-text-primary pb-1'
                  : 'text-sr-text-secondary hover:text-sr-text-primary transition-colors'
              }
            >
              Supports
            </NavLink>
            <NavLink
              to="/books"
              className={({isActive}) =>
                isActive
                  ? 'text-sr-text-primary font-semibold border-b-2 border-sr-text-primary pb-1'
                  : 'text-sr-text-secondary hover:text-sr-text-primary transition-colors'
              }
            >
              Books
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  )
}