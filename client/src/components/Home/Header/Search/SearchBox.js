import { AiOutlineSearch } from 'react-icons/ai';
import { useRef, useEffect } from 'react';
import { SearchHints } from './SearchHints';

export const SearchBox = () => {
  const modalRef = useRef();
  const searchRef = useRef();

  const modalHandler = ({ target }) => {
    if (searchRef.current.contains(target)) {
      modalRef.current.style.display = 'block';
    } else {
      modalRef.current.style.display = 'none';
    }
  };

  useEffect(() => {
    window.addEventListener('click', modalHandler);
    return () => {
      window.removeEventListener('click', modalHandler);
    };
  });

  return (
    <form ref={searchRef} className="search">
      <div className="input-search">
        <AiOutlineSearch size={20} color="#838C95" />
        <input type="text" className="logo-search" placeholder="Search..." />
        <div ref={modalRef} className="search-hints">
          <SearchHints />
        </div>
      </div>
    </form>
  );
};
