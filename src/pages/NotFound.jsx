function NotFound() {
  return (
    <div className="max-w-5xl mx-auto text-center py-16">
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <Link to="/" className="underline">Go back to the builder</Link>
    </div>
  );
}