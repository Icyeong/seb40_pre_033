// grid 모달 처럼
import styled from 'styled-components';

export const TagBox = styled.ul`
  margin: 4px 0;
  /* border: 1px solid red; */
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  // Mobile
  @media screen and (max-width: 1260px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  // Mobile
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  // Mobile
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const TagInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  > div {
    padding: 12px;
    border: 1px solid #babfc4;
    border-radius: 4px;
    box-sizing: inherit;
    &:focus-within {
      box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5);
      border: none;
      outline: 0;
    }

    h6 {
      background-color: #e1ecf4;
      width: 40px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--theme-link-color);
      font-size: 13px;
      border-radius: 2px;
      cursor: pointer;
      margin-bottom: 12px;

      &:hover,
      &:active {
        color: var(--theme-link-color-hover);
      }
    }
    h5 {
      margin-bottom: 12px;
      font-size: 13px;
      color: var(--black-500);
      max-width: 227px;
      max-height: 67px;
      overflow: auto;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;

export const TagQuestion = styled.div`
  display: flex;
  justify-content: space-between;

  .question {
    color: #838c95;
    font-size: 12px;
  }
`;
// user 정보 question 페이지 참고
export const TagsSection = () => {
  return (
    <TagBox>
      <TagInfo>
        <div>
          <h6>tag</h6>
          <h5>
            For questions about programming in ECMAScript (JavaScript/JS) and
            its different dialects/implementations (except for ActionScript).
            Keep in mind that JavaScript is NOT the same as Java! Include all
            labels that are relevant to your question; e.g., [node.js],
            [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js],
            [typescript], [svelte], etc.
          </h5>
          <TagQuestion>
            <div className="question">2442310 questions</div>
            <div className="question">608 asked today, 4105 this week</div>
          </TagQuestion>
        </div>
      </TagInfo>
    </TagBox>
  );
};
