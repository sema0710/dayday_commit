import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { MainPage , MainInput , MainSearchButton , MainWrapper , MainTitle } from '../style/mainStyle';
import { Link } from 'react-router-dom';
function Main(props){
    const input = useRef(null);
    const button = useRef(null);
    let userId; 

    const inputChange = ()=>{
        userId = input.current.value;
        console.log(userId);
    }

    const buttonClick = ()=>{
        axios.get(`https://api.github.com/users/${userId}`)
        .then((data)=>{
            props.dataChange(data.data);
            localStorage.setItem("user",userId);
            window.location.href="/today"
        }).catch(e=>{
            alert("please check your id");
        })
    }

    const keyPress = (e)=>{
        if(e.key === "Enter"){
            buttonClick();
        }
    }

    return(
            <MainPage>
                <MainWrapper>
                    <MainTitle>one day one commit</MainTitle>
                        <MainInput onChange={inputChange} ref={input} onKeyPress={keyPress} placeholder="insert your github id"/>
                        <MainSearchButton onClick={buttonClick} ref={button}>Search!</MainSearchButton>
                </MainWrapper>
            </MainPage>
    );
}

export default Main;