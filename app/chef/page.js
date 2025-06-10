import { client } from "../../lib/sanity";

export default async function ChefPage() {
  const blogs = await client.fetch(
    `*[_type == "blog" && category == "chef"] | order(publishedAt desc)`
  );

  return (
    <main className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Chef Dik</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id} className="mb-4">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.content}</p>
            <span className="text-gray-500 text-sm">
              {blog.publishedAt &&
                new Date(blog.publishedAt).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
