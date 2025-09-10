import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  return (
    <header className="bg-white">
      <div className="container-xxl flex items-center justify-between hdr-pad">
        <Link to="/" className="hdr-min font-medium tracking-tight">
          Spectrum Research Library
        </Link>
        <nav className="flex items-center gap-8">
          <NavLink to="/challenges/coming-out-anxiety" className={({isActive}) => isActive || pathname.startsWith('/challenges') ? 'hdr-min font-semibold text-sr-pink' : 'hdr-min hover:opacity-80'}>
            Challenges
          </NavLink>
          <NavLink to="/supports" className={({isActive}) => isActive ? 'hdr-min font-semibold text-sr-pink' : 'hdr-min hover:opacity-80'}>
            Support
          </NavLink>
          <NavLink to="/books" className={({isActive}) => isActive ? 'hdr-min font-semibold text-sr-pink' : 'hdr-min hover:opacity-80'}>
            Books
          </NavLink>
          {!isHome && (
            <Link to="/" className="btn btn-black ml-4">Home</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
