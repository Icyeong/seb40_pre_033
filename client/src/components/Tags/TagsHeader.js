import styled from 'styled-components';

export const TagsHeader = () => {
  return (
    <HeaderWrapper>
      <div className="title">
        <h1>Tags</h1>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </p>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  height: 25%;
  width: 90%;
  border: 4px solid blue;

  > .title {
    margin-bottom: 16px;

    // Mobile
    @media screen and (max-width: 640px) {
      display: flex;
      flex: 1 auto !important;
    }
    > h1 {
      font-size: 27px;
      margin-bottom: 16px;
      // Mobile
      @media screen and (max-width: 640px) {
        font-size: 22px;
        margin-bottom: 16px;
      }
    }
    > p {
      display: block;
      font-size: 15px;
      white-space: normal;
    }
  }
`;
