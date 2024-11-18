import { Pen, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <header
      className="w-full py-4 px-6 flex items-center justify-between bg-white z-50"
      style={{
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center space-x-2">
        <a href="/" className="flex items-center space-x-2">
          <Pen style={{ color: "var(--color-primary)" }} className="h-8 w-8" />
          <span
            style={{ color: "var(--color-text-primary)" }}
            className="text-xl font-bold"
          >
            Writing Buddy
          </span>
        </a>
      </div>
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-12">
          <Link
            to="/product"
            style={{ color: "var(--color-text-secondary)" }}
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            Product Information
          </Link>
          <Link
            to="/pricing"
            style={{ color: "var(--color-text-secondary)" }}
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/resources"
            style={{ color: "var(--color-text-secondary)" }}
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            Resources
          </Link>
        </div>
      </nav>
      <div className="flex items-center">
        <User
          style={{ color: "var(--color-text-secondary)" }}
          className="h-8 w-8"
        />
      </div>
    </header>
  );
}
