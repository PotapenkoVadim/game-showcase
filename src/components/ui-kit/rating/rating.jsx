import styled from 'styled-components';

const StyledRating = styled.span`
  color: gold;
`;

export default function Rating(props) {
  return <StyledRating {...props} />;
}
