import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: calc(100% - 4px);
  height: calc(100% - 50px);
  resize:none;
  font-size:2.5vh;
`

function TextDocument() {
  return (
  <TextArea>
    some text
  </TextArea>

  )
}

export default TextDocument;