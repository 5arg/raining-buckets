import styled from "styled-components/macro";

export const SearchWrapper = styled.div`
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ff5e24;
  text-align: center;
  font-family: PTSansCaption-Regular;
  line-height: 1.6;
  margin-top: 20px;
  font-size: 16px;
  width: 250px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

type DropdownWrapperProps = {
  show: boolean;
};

export const DropdownWrapper = styled.div`
  position: absolute;
  display: ${({ show }: DropdownWrapperProps) => (show ? "block" : "none")};
  width: 255px;
  background: #ff5e24;
  border-radius: 5px;
  margin-top: 5px;
  z-index: 9999;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Dropdown = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: PTSansCaption-Regular;
`;

export const DropdownItem = styled.li`
  padding: 5px 10px;
  color: white;
  border: 1px solid #ff5e24;
  border-radius: 5px;

  &:hover {
    background: white;
    color: #ff5e24;
    cursor: pointer;
  }
`;
