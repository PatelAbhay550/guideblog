import Link from "next/link";
import BlogCard from "./Card";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";
import UIElements from "./UIElements";

export default async function Blog() {
  const q = query(collection(db, "Blogposts"));

  // Fetch the posts from Firestore
  const querySnapshot = await getDocs(q);
  const blogPosts = [];

  querySnapshot.forEach((doc) => {
    // Push each post data along with its ID into the posts array
    blogPosts.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return (
    <>
      <main className="container mx-auto my-10 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          GuideBlog - All Coding Guides in One Place
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Explore the latest tips and tricks on coding, React.js, Tailwind CSS,
          and web development.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Tailwind UI Elements
        </h2>
        <p className="text-gray-800 mb-4 pb-8">
          Interactive Tailwind CSS UI Elements: Enhance User Experience with
          Modern Components. In today’s digital landscape, creating engaging and
          interactive web interfaces is crucial for a memorable user experience.
          With Tailwind CSS, you can effortlessly design visually appealing and
          functional UI components. In this guide, we explore a set of
          interactive Tailwind CSS elements that are perfect for enhancing your
          web projects.
        </p>
        <UIElements />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blogs</h2>
          {blogPosts.map((post, index) => (
            <Link href={`/posts/${post.slug}`} key={index}>
              <BlogCard
                key={index}
                title={post.title}
                date={post.date}
                description={post.description}
                category={post.category}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
