import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";
import { notFound } from "next/navigation";
import Head from "next/head";

export default async function SinglePage({ params }) {
  const { slug } = params;
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
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="container mx-auto my-10 px-4 min-h-[56vh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.date,
            description: post.description,
            articleBody: post.content,
          }),
        }}
      />
      <article className="bg-white p-8 ">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <FaUserCircle className="text-xl" />
            <span>{post.author}</span>
            <FaCalendarAlt className="text-xl" />
            <span>{post.date}</span>
          </div>
        </header>
        <hr />
        <section className="text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
        </section>
      </article>
    </div>
  );
}
export async function generateMetadata({ params }) {
  const { slug } = params;
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
  const post = blogPosts.find((post) => post.slug === slug);

  // Return metadata based on the post
  return {
    title: `${post.title} - Guideblog`,
    description: post.description
      ? `${post.description.slice(0, 110)}...`
      : "No description available.",
    keywords: post.keywords ? post.keywords : "No keywords available.",
  };
}
