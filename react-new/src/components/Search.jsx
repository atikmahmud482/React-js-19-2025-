import { CiSearch } from "react-icons/ci";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <CiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default Search;
