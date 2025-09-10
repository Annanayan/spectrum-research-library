import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="container-xxl py-24 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-sr-muted">Let's get you back to the library.</p>
      <div className="mt-6">
        <Link to="/" className="btn btn-black">Go Home</Link>
      </div>
    </div>
  )
}
