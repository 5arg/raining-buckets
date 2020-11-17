import styled from "styled-components/macro";

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownValueWrapper = styled.div`
  margin: 10px 20px 5px 20px;
  border-radius: 5px;
  border: 1px solid #ff4a4a;
  padding: 5px 0px;
  font-size: 18px;
  background: #ff4a4a;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const DropdownValue = styled.p`
  font-family: PTSansCaption-Regular;
  padding: 0;
  margin: 0;
  position: relative;
`;

type YearDropdownProps = {
  show: boolean;
};

export const YearDropdown = styled.ul<YearDropdownProps>`
  position: absolute;
  display: ${(e) => (e.show ? "normal" : "none")};
  list-style-type: none;
  margin: 0px 20px auto;
  padding: 0;
  background: #ff4a4a;
  border-radius: 5px;
  left: 0;
  right: 0;
`;

export const YearOption = styled.li`
  padding: 5px 10px;
  color: white;
  border: 1px solid #ff4a4a;
  border-radius: 5px;
  &:hover {
    background: white;
    color: #ff4a4a;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
`;
