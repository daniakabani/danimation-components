import styled from "styled-components";

const CardStyle = styled.div`
   {
    .IN-card {
      &.recommended {
        border-color: #8552f2;
        .recommendation {
          position: absolute;
          padding: 8px 16px;
          border-radius: 8px;
          background: #54bdbd;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          text-transform: uppercase;
          color: white;
        }
      }
    }
  }
`;
export default CardStyle;
