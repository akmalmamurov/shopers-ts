const SearchInput = () => {
  return (
    <div className="w-full hidden md:inline-flex flex-1 h-12 ">
      <input
        type="text"
        placeholder="Search products...."
        className="flex-1 h-full outline-none bg-transparent placeholder:text-lightText border border-accent/30 rounded-sm pl-8 pr-28"
      />
    </div>
  );
};

export default SearchInput;
