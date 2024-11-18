export default function Footer() {
  return (
    <div className="w-full py-4 px-6 bg-white shadow-sm mt-auto">
      <div
        style={{ color: "var(--color-text-secondary)" }}
        className="text-center text-sm"
      >
        © {new Date().getFullYear()} Writing Buddy. All rights reserved.
      </div>
    </div>
  );
}
