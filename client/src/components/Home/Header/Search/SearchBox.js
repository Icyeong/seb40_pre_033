import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from 'react';
import { SearchHints } from './SearchHints';

export const SearchBox = () => {
  const modalRef = useRef();

  const onFocusInput = () => {
    if (!modalRef.current) {
      return;
    }
    modalRef.current.style.display = 'block';
    console.log(modalRef.current.style);
  };

  const onBlurInput = () => {
    if (!modalRef.current) {
      return;
    }
    modalRef.current.style.display = 'none';
  };

  return (
    <form className="search">
      <div className="input-search">
        <AiOutlineSearch size={20} color="#838C95" />
        <input
          type="text"
          className="logo-search"
          placeholder="Search..."
          onFocus={onFocusInput}
          onBlur={onBlurInput}
        />
        <div ref={modalRef}>
          <SearchHints />
        </div>
      </div>
    </form>
  );
};
