import React, { useState } from 'react';
import axios from 'axios';
import { MainPage , MainInput , MainSearchButton , MainWrapper , MainTitle } from '../style/mainStyle';
import { withRouter } from 'react-router-dom';

function Main({history}){

    const [userId, userIdChange] = useState(undefined);

    const buttonClick = ()=>{
        axios.get(`https://api.github.com/users/${userId}`)
        .then((data)=>{
            history.push(`/Today/${userId}`)
        }).catch(e=>{
            alert("please check your id");
        })
    }

    const keyPress = (e)=>{
        if(e.key === "Enter"){
            buttonClick();
        }
    }

    const inputChange = e => {
        userIdChange(e.target.value)
    }

    return(
            <MainPage>
                <MainWrapper>
                    <MainTitle>one day one commit</MainTitle>
                        <MainInput 
                            onChange={inputChange} 
                            onKeyPress={keyPress} 
                            placeholder="insert your github id"/>
                        <MainSearchButton onClick={buttonClick} >Search!</MainSearchButton>
                </MainWrapper>
            </MainPage>
    );
}

export default withRouter(Main);