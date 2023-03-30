import styled from 'styled-components';

const SearchbarInput = styled.input`
  display: flex;
  align-self: center;
  margin: 30px auto;
  padding-left: 15px;
  width: 300px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid orange;
`;

const SearchbarDiv = styled.div`
  display: flex;
  background-color: grey;
`;

export { SearchbarInput, SearchbarDiv };
