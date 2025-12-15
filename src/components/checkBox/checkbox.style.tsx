import styled from "styled-components";

const CheckboxStyle = styled.div`
   {
    .IN-checkbox {
      width: 36px;
      height: 36px;
      border-radius: 100%;
      margin-right: 10px;
      cursor: pointer;
      .checkbox-container {
        filter: grayscale(1);
        transition: ease all 0.3s;
      }
      &.active {
        .checkbox-container {
          filter: grayscale(0);
        }
      }
    }
  }
`;

export default CheckboxStyle;
