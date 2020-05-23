import styled from "styled-components";
// import { theme } from "shared";
// import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const WrapperApp = styled.div`
  .flex-center {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-space-around {
    display: flex;
    justify-content: space-around;
  }
  .flex-space-between {
    display: flex;
    justify-content: space-between;
  }
  .flex-space-evenly {
    display: flex;
    justify-content: space-evenly;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }
  .color-white {
    color: #fff;
  }

  .color-purple {
    color: #2b259f;
  }

  .color-grey {
    color: #8f92b3;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .text-bold {
    font-weight: bold;
  }
`;
