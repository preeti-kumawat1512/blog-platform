type BlogCardProps = {
  title: string
  author: string
  date: string
  snippet: string
  image?: string
}

export default function BlogCard({ title, author, date, snippet, image }: BlogCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-2">By {author} | {date}</p>
        <p className="text-gray-700 mb-4">{snippet}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Read More
        </button>
      </div>

    </div>
  )
}