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
    width: 100%;
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
      box-sizing: inherit;
      justify-content: center;
      align-items: center;
      color: var(--theme-link-color);
      font-size: 13px;
      border-radius: 2px;
      cursor: pointer;
      margin-bottom: 12px;
      display: inline-block;
      padding: 0.4em 0.5em;
      line-height: 1;
      white-space: nowrap;
      text-decoration: none;

      &:hover,
      &:active {
        color: var(--theme-link-color-hover);
      }
    }
    h5 {
      margin-bottom: 12px;
      font-size: 13px;
      color: var(--black-500);
      max-height: 67px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    // Mobile
    @media screen and (max-width: 1260px) {
      .h5 > {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    // Mobile
    @media screen and (max-width: 980px) {
      .h5 > {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    // Mobile
    @media screen and (max-width: 640px) {
      .h5 > {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
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
    <>
      <TagBox>
        <TagInfo>
          <div>
            <h6>JavaScript</h6>
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
        <TagInfo>
          <div>
            <h6>Python</h6>
            <h5>
              Python is a multi-paradigm, dynamically typed, multi-purpose
              programming language. It is designed to be quick to learn,
              understand, and use, and enforces a clean and uniform syntax.
              Please note that Python 2 is officially out of support as of
              2020-01-01. For version-specific Python questions, add the
              [python-2.7] or [python-3.x] tag. When using a Python variant
              (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please
              include it in the tags.
            </h5>
            <TagQuestion>
              <div className="question">2052115 questions</div>
              <div className="question">992 asked today, 5934 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>java</h6>
            <h5>
              Java is a high-level object-oriented programming language. Use
              this tag when you`re having problems using or understanding the
              language itself. This tag is frequently used alongside other tags
              for libraries and/or frameworks used by Java developers.
            </h5>
            <TagQuestion>
              <div className="question">1820432 questions</div>
              <div className="question">829 asked today, 3840 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>c#</h6>
            <h5>
              C# (pronounced see sharp) is a high level, statically typed,
              multi-paradigm programming language developed by Microsoft. C#
              code usually targets Microsoft`s .NET family of tools and
              run-times, which include .NET, .NET Framework, .NET MAUI, and
              Xamarin among others. Use this tag for questions about code
              written in C# or about C#`s formal specification.
            </h5>
            <TagQuestion>
              <div className="question">1288343 questions</div>
              <div className="question">622 asked today, 3924 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>c#</h6>
            <h5>
              C# (pronounced see sharp) is a high level, statically typed,
              multi-paradigm programming language developed by Microsoft. C#
              code usually targets Microsoft`s .NET family of tools and
              run-times, which include .NET, .NET Framework, .NET MAUI, and
              Xamarin among others. Use this tag for questions about code
              written in C# or about C#`s formal specification.
            </h5>
            <TagQuestion>
              <div className="question">1288343 questions</div>
              <div className="question">622 asked today, 3924 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>c#</h6>
            <h5>
              C# (pronounced see sharp) is a high level, statically typed,
              multi-paradigm programming language developed by Microsoft. C#
              code usually targets Microsoft`s .NET family of tools and
              run-times, which include .NET, .NET Framework, .NET MAUI, and
              Xamarin among others. Use this tag for questions about code
              written in C# or about C#`s formal specification.
            </h5>
            <TagQuestion>
              <div className="question">1288343 questions</div>
              <div className="question">622 asked today, 3924 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>c#</h6>
            <h5>
              C# (pronounced see sharp) is a high level, statically typed,
              multi-paradigm programming language developed by Microsoft. C#
              code usually targets Microsoft`s .NET family of tools and
              run-times, which include .NET, .NET Framework, .NET MAUI, and
              Xamarin among others. Use this tag for questions about code
              written in C# or about C#`s formal specification.
            </h5>
            <TagQuestion>
              <div className="question">1288343 questions</div>
              <div className="question">622 asked today, 3924 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>c#</h6>
            <h5>
              C# (pronounced see sharp) is a high level, statically typed,
              multi-paradigm programming language developed by Microsoft. C#
              code usually targets Microsoft`s .NET family of tools and
              run-times, which include .NET, .NET Framework, .NET MAUI, and
              Xamarin among others. Use this tag for questions about code
              written in C# or about C#`s formal specification.
            </h5>
            <TagQuestion>
              <div className="question">1288343 questions</div>
              <div className="question">622 asked today, 3924 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>c#</h6>
            <h5>
              C# (pronounced see sharp) is a high level, statically typed,
              multi-paradigm programming language developed by Microsoft. C#
              code usually targets Microsoft`s .NET family of tools and
              run-times, which include .NET, .NET Framework, .NET MAUI, and
              Xamarin among others. Use this tag for questions about code
              written in C# or about C#`s formal specification.
            </h5>
            <TagQuestion>
              <div className="question">1288343 questions</div>
              <div className="question">622 asked today, 3924 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>c#</h6>
            <h5>
              C# (pronounced see sharp) is a high level, statically typed,
              multi-paradigm programming language developed by Microsoft. C#
              code usually targets Microsoft`s .NET family of tools and
              run-times, which include .NET, .NET Framework, .NET MAUI, and
              Xamarin among others. Use this tag for questions about code
              written in C# or about C#`s formal specification.
            </h5>
            <TagQuestion>
              <div className="question">1288343 questions</div>
              <div className="question">622 asked today, 3924 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>c#</h6>
            <h5>
              C# (pronounced see sharp) is a high level, statically typed,
              multi-paradigm programming language developed by Microsoft. C#
              code usually targets Microsoft`s .NET family of tools and
              run-times, which include .NET, .NET Framework, .NET MAUI, and
              Xamarin among others. Use this tag for questions about code
              written in C# or about C#`s formal specification.
            </h5>
            <TagQuestion>
              <div className="question">1288343 questions</div>
              <div className="question">622 asked today, 3924 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
        <TagInfo>
          <div>
            <h6>c#</h6>
            <h5>
              C# (pronounced see sharp) is a high level, statically typed,
              multi-paradigm programming language developed by Microsoft. C#
              code usually targets Microsoft`s .NET family of tools and
              run-times, which include .NET, .NET Framework, .NET MAUI, and
              Xamarin among others. Use this tag for questions about code
              written in C# or about C#`s formal specification.
            </h5>
            <TagQuestion>
              <div className="question">1288343 questions</div>
              <div className="question">622 asked today, 3924 this week</div>
            </TagQuestion>
          </div>
        </TagInfo>
      </TagBox>
    </>
  );
};
