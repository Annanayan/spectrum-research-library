import { Link } from 'react-router-dom'
export function GrayButton({ to, children }: { to: string, children: React.ReactNode }) {
  return <Link to={to} className="btn btn-gray">{children}</Link>
}
export function BlackButton({ to, children }: { to: string, children: React.ReactNode }) {
  return <Link to={to} className="btn btn-black">{children}</Link>
}
