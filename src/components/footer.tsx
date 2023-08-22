export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mb-8">
      <small className="block text-gray-700 dark:text-gray-300 text-xs tracking-wider">
        &copy; {year} All right reserverd
      </small>
    </footer>
  );
}
