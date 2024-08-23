export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center text-gray-600">
        <p>
          Explore the coding guides on React.js, Tailwind CSS, and web
          development.
        </p>
        <p>&copy; {new Date().getFullYear()} Guideblog - All Rights Reserved</p>
      </div>
    </footer>
  );
}
