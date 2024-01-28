import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: calc(100% - 4px);
  height: calc(100% - 50px);
  resize:none;
  font-size:20px;
`

interface props {
  text : string
}

function TextDocument({text} : props) {
  return (
  <TextArea style={{fontFamily:'Consolas, monospace'}} defaultValue={text}/ >
  );
}

export default TextDocument;