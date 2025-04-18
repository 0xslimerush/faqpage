import { ChevronDown } from "lucide-react";
import styled from "styled-components";

export const SAppWrapper = styled.div`
  min-height: 100vh;
  background-color: #0a0b0d;
  color: white;
`;

export const SAppContainer = styled.div`
  max-width: 1280px;
  margin-inline: auto;
  padding: 64px 16px;

  @media (min-width: 640px) {
    padding-inline: 24px;
  }

  @media (min-width: 1024px) {
    padding-inline: 32px;
  }
`;

export const SHeaderTitle = styled.h1`
  font-size: 36px;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  background-image: linear-gradient(to right, #ff3366, #ff6b4d);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const SHeaderSubtitle = styled.p`
  text-align: center;
  color: #9ca3af;
  margin-bottom: 48px;
  max-width: 672px;
  margin-inline: auto;
`;

export const SFAQWrapper = styled.div`
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
`;

export const SChevronDown = styled(ChevronDown)<{ isOpen: boolean }>`
  width: 20px;
  height: 20px;
  color: #ff3366;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const SFAQContainer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  padding-block: ${({ isOpen }) => (isOpen ? "16px" : "0")};
  overflow: hidden;
  padding-inline: 24px;
  transition: max-height 0.3s ease-in-out, padding-block 0.3s ease-in-out;
`;

export const SFAQAnswer = styled.div`
  color: #9ca3af;

  & > p {
    margin-bottom: 16px;
    white-space: pre-line;
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
