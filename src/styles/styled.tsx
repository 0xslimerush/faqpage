import styled from "styled-components";

export const SFAQContainer = styled.div`
  & > * {
    margin-block: 16px;
    max-width: 768px;
    margin-inline: auto;
  }
`;

export const SFAQItem = styled.div`
  border: 1px solid #1f2937;
  border-radius: 8px;
  overflow: hidden;
  background-color: #13141a;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #ff3366;
  }

  & > button {
    width: 100%;
    padding-inline: 24px;
    padding-block: 16px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  & > button > span {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
  }

  & > button > svg {
    width: 20px;
    height: 20px;
    color: #ff3366;
    transition: transform 0.3s ease-in-out;
  }

  //fix
  //   & > button > svg.open {
  //     transform: rotate(180deg);
  //   }
  //

  & > div {
    padding-inline: 24px;
    transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
    overflow: hidden;
  }

  // fix
  //   & > div.closed {
  //     max-height: 0;
  //     padding: 0;
  //   }

  //   & > div.open {
  //     max-height: 1000px;
  //     padding-block: 16px;
  //   }
  //

  & > div > p {
    color: #9ca3af;
    white-space: pre-line;
  }
`;

export const SFAQAnswer = styled.div`
  & > p {
    margin-bottom: 16px;
  }

  & > ol {
    list-style-type: decimal;
    margin-left: 16px;

    & > li {
      margin-bottom: 16px;
      overflow-wrap: break-word;
      
      & > ul {
        list-style-type: disc;
        margin-left: 16px;
      }
    }
  }
`;
