<div className="fixed inset-0 -z-50 animate-gradient bg-gradient-to-br from-[#18181b] via-[#1e293b] to-[#22c55e] opacity-80"></div>;

import Link from "next/link";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SectionCards from "./components/SectionCards";
import { client } from "../lib/sanity";

export default async function Home() {
  const chefBlogs = await client.fetch(
    `*[_type == "blog" && category == "chef"] | order(publishedAt desc)`
  );
  const softwareBlogs = await client.fetch(
    `*[_type == "blog" && category == "software"] | order(publishedAt desc)`
  );
  const traderBlogs = await client.fetch(
    `*[_type == "blog" && category == "trader"] | order(publishedAt desc)`
  );

  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionCards />
      {/* Dinamik içerik özetleri */}
      <section className="max-w-5xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-white mb-6">Son İçerikler</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Chef */}
          <div>
            <h3 className="text-green-400 font-semibold mb-2">Hey Chef!</h3>
            {chefBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-[#232323] rounded-lg p-4 mb-4 shadow hover:scale-105 transition"
              >
                <h4 className="text-lg font-bold text-white">{blog.title}</h4>
                <p className="text-gray-300 text-sm">
                  {blog.content.slice(0, 60)}...
                </p>
              </div>
            ))}
          </div>
          {/* Software */}
          <div>
            <h3 className="text-green-400 font-semibold mb-2">
              Developer Chef!
            </h3>
            {softwareBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-[#232323] rounded-lg p-4 mb-4 shadow hover:scale-105 transition"
              >
                <h4 className="text-lg font-bold text-white">{blog.title}</h4>
                <p className="text-gray-300 text-sm">
                  {blog.content.slice(0, 60)}...
                </p>
              </div>
            ))}
          </div>
          {/* Trader */}
          <div>
            <h3 className="text-green-400 font-semibold mb-2">Trader Chef</h3>
            {traderBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-[#232323] rounded-lg p-4 mb-4 shadow hover:scale-105 transition"
              >
                <h4 className="text-lg font-bold text-white">{blog.title}</h4>
                <p className="text-gray-300 text-sm">
                  {blog.content.slice(0, 60)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
