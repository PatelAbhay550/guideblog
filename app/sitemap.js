import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";

export default async function sitemap() {
  const q = query(collection(db, "Blogposts"));

  // Fetch the posts from Firestore
  const querySnapshot = await getDocs(q);
  const blogPosts = [];

  querySnapshot.forEach((doc) => {
    blogPosts.push({
      id: doc.id,
      slug: doc.data().slug, // Make sure 'slug' is a field in your document
      ...doc.data(),
    });
  });

  const urls = blogPosts.map((item) => ({
    url: `https://www.guideblog.me/posts/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  const staticUrls = [
    {
      url: "https://www.guideblog.vercel.app",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  return [...staticUrls, ...urls];
}
