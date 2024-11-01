import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="w-full h-20 bg-accentWhite border-b border-lightText/50">
      <Container className="h-full flex items-center justify-between gap-5 lg:gap-10">
        {/* logo */}
        <Logo/>

        {/* search input */}
        <SearchInput/>
        {/* navbar list */}
        <div>navbar list</div>
      </Container>
    </header>
  );
};

export default Header;
