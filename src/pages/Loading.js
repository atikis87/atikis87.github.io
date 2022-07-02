import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BallTriangle } from  'react-loader-spinner'
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    text-align:center;
    background-color: #282c34;
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100vh;
`

function Loading() {
    return (
    <LoadingWrapper>
        <BallTriangle
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </LoadingWrapper>
    )
}

export default Loading;
