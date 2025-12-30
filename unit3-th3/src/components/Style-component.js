import React from "react";
import styled from "styled-components";

const StyledText = styled.h2
`
color: ${(props) => {
    if(props.numClicked % 2 ===0){
        return "blue";
    }
    return "red";
}}
`

export default StyledText;