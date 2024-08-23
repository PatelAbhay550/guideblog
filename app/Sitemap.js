import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";
export default async function sitemap() {
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
  const urls = blogPosts.map((item) => ({
    url: `https://www.guideblog.me/posts/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
  const staticUrls = [
    {
      url: "https://www.guideblog.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  return [...staticUrls, ...questionUrls];
}
