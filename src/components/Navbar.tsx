import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        <h1 className="text-xl font-bold">
          BlogPlatform
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/create-blog">Create</Link>
        </div>

        <div className="flex gap-4">
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>

      </div>
    </nav>
  )
}