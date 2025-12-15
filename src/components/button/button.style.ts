import styled from "styled-components";

const ButtonStyle = styled.div`
   {
    .in-button {
      display: block;
      width: 100%;

      button {
        margin: 15px 0;
        padding: 15px;
        background-color: ${(props) => props.theme.secondaryColor};
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05),
          0 2px 2px rgba(0, 0, 0, 0.15);
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        border-radius: 16px;
        border: none;
        width: 100%;
        cursor: pointer;
        transition: ease all 0.3s;
        font-weight: 500;
        &:hover {
          background-color: ${(props) => props.theme.primaryColor};
          color: white;
        }
      }
      &.disabled {
        button {
          background-color: #dadada;
          pointer-events: none;
        }
      }
    }
  }
`;

export default ButtonStyle;
