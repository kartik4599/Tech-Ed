import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";

const Header = () => {
    return (
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <FaMobileAlt className="size-6 mr-2" />
          <span className="font-bold text-lg">Tech-Ed</span>
        </Link>
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              All Courses
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              My Learning
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              My Account
            </Link>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;