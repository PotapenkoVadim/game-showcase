import styled from 'styled-components';

const StyledNote = styled.div`
  text-align: center;
  font-size: 18px;
`;

export default function Note(props) {
  return <StyledNote {...props} />;
}
