import styled from "styled-components";
import { flexSet, visibilityHidden } from "../../../Styles/Theme";

export const Map = styled.div`
  ${flexSet("flex-start", "center")}
  ${({ btnActive }) => !btnActive && visibilityHidden}
  position: absolute;
  width: 500px;
  top: 160px;
  padding: 16px 0;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 10px 4px #ddd;

  > ul {
    width: 100%;

    li {
      ${flexSet("flex-start", "center")};
      padding: 8px 16px 8px 32px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }

      div {
        &:first-child {
          width: auto;
          height: 48px;
          font-size: 48px;
          line-height: 48px;
        }
        &:last-child {
          margin-left: 10px;
          font-size: 16px;
        }

        img {
          height: 100%;
        }
      }
    }
  }
`;
