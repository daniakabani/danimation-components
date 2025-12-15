import styled from "styled-components";

const CardRadioStyle = styled.div`
   {
    .IN-radioCard {
      .titles {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
        h3 {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
        }
        .circles {
          width: 36px;
          height: 36px;
          margin: 5px;
          border: 1px solid ${(props) => props.theme.primaryColor};
          border-radius: 100%;
          position: relative;
          cursor: pointer;
          z-index: 1;
          &:before {
            content: "";
            border: 1px solid #ededed;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 18px;
            width: 18px;
            border-radius: 100%;
            z-index: -1;
            transition: 0.3s all ease;
          }
          &.active {
            &:before {
              background-color: ${(props) => props.theme.primaryColor};
            }
          }
        }
      }
    }
  }
`;

export default CardRadioStyle;
