import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: ${(props) => props.size || '32'}px;
  font-weight: bold;
`;

export default function Title(props) {
  return <StyledTitle {...props} />;
}
