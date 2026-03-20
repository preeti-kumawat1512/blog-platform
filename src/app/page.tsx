import Image from "next/image"
import BlogCard from "@/components/BlogCard"

const dummyBlogs = [
  {
    title: "Learn Next.js Fast",
    author: "Preeti",
    date: "Mar 16, 2026",
    snippet: "Next.js is a powerful React framework...",
    image: "/images/blog1.jpg"
  },
  {
    title: "Full Stack Projects",
    author: "Preeti",
    date: "Mar 15, 2026",
    snippet: "Building full stack projects is essential for learning...",
  }
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-6xl flex-col items-center py-16 px-4 sm:items-start">

        {/* Existing Intro Section */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            Welcome to Blog Platform
          </h1>
          <p className="text-gray-600 dark:text-zinc-400">
            Here are some sample blogs to get started:
          </p>
        </div>

        {/* BlogCard Grid */}
        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyBlogs.map((blog, index) => (
            <BlogCard 
              key={index} 
              title={blog.title} 
              author={blog.author} 
              date={blog.date} 
              snippet={blog.snippet} 
              image={blog.image} 
            />
          ))}
        </div>

      </main>
    </div>
  )
}