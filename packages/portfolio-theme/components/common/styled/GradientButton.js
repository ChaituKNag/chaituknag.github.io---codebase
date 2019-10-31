import styled from "styled-components";

export const GradientButton = styled.button`
  height: 53px;
  padding: 12px 10px 11px;
  color: var(--baby-powder);
  font-size: 27px;
  font-family: "Courier New", sans-serif;
  font-weight: bold;
  border: none;
  box-shadow: 0 3px 6px var(--box-shadow-for-button);
  border-radius: 10px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  line-height: 30px;
  background: linear-gradient(
    135deg,
    var(--rose-madder),
    var(--bright-yellow-crayola)
  );
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
`;
