
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
          <a className="navbar-brand">Products</a>
        </Link>

        <Link href="/orders">
          <a className="navbar-brand">Orders</a>
        </Link>

        <Link href="/login">
          <a className="navbar-brand">Login</a>
        </Link>
      </nav>
    </div>
  )
}
