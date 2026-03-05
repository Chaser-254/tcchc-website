export function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Taita Craft & Cultural Heritage Centre (TCCHC)
          </p>
        </div>
      </div>
    </footer>
  );
}