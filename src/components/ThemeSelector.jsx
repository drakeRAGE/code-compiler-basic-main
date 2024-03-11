import { Text } from '@chakra-ui/react'
import React from 'react'
import '../index.css';
import styled from 'styled-components';

const ThemeContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const ThemeSelector = () => {
  // const [currentTheme, setCurrentTheme] = useState('theme1');

  const changeTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'theme1' ? 'theme2' : 'theme1'));
  };
  return (
    <button onClick={changeTheme}>Change theme</button>
  )
}

export default ThemeSelector