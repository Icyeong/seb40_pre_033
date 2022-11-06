import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  row-gap: 10px;
  column-gap: 30px;
  justify-content: space-between;
  margin: 20px 0;
  // Mobile
  @media screen and (max-width: 640px) {
    gap: 30px;
  }
  > .pagination {
    margin: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 27px;
      padding: 0 8px;
      color: hsl(210, 8%, 25%);
      border: 1px solid hsl(210, 8%, 85%);
      border-radius: 3px;
      font-size: 13px;
      cursor: pointer;
      :hover {
        background-color: hsl(210, 8%, 85%);
      }
    }
    & > li.active {
      border: none;
      color: #ffffff;
      background-color: hsl(27, 90%, 55%);
      cursor: default;
    }
    & > li:first-child,
    & > li:last-child {
      display: none;
      width: 50px;
    }
    & > li:nth-child(2),
    & > li:nth-last-child(2) {
      width: 50px;
    }
  }
`;

export const TagsPagination = () => {
  let { page, size, totalElements, totalPages } = useSelector(
    (state) => state.questionsReducer.pageInfo
  );
  const [currentPage, setCurrentPage] = useState(page);
  const handleCurrentPageChange = async (e) => {
    console.log('Users 현재 페이지 번호 체인지');
    setCurrentPage(e);
  };
  return (
    <Box>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={size}
        // 한 페이지 당 20개 * 5페이지 = 100
        totalItemsCount={totalElements}
        pageRangeDisplayed={totalPages}
        onChange={handleCurrentPageChange}
        prevPageText="Prev"
        nextPageText="Next"
      />
    </Box>
  );
};
