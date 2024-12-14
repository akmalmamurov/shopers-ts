import { navbarList } from "@/data";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <header className="w-full h-20 bg-accentWhite border-b border-lightText/50 sticky z-50 top-0">
      <Container className="h-full flex items-center justify-between gap-5 lg:gap-10">
        {/* logo */}
        <Logo />

        {/* search input */}
        <SearchInput />
        {/* navbar list */}
        <div className="hidden md:inline-flex items-center gap-7">
          {navbarList?.map((item) => (
            <Link className="navbarItem" href={item.link} key={item.title}>
              {item.title}
            </Link>
          ))}
          {!session?.user && (
            <Link className="navbarItem" href="/signin">
              Sign in
            </Link>
          )}
          <Link className="navbarItem" href="/studio">
            Studio
          </Link>
        </div>
        <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer text-2xl hoverEffect hover:text-darkOrange" />
      </Container>
    </header>
  );
};

export default Header;
