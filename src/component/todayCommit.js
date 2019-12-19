import React, { useEffect , useState } from 'react'
import {} from '../style/mainStyle'
import axios from 'axios'
import Commits from './commits'
import { UserPro , TodayCommitDiv, TodayWrapper, MainText, SubText , CommitProTextWrapper, CommitPro, TodayMain } from '../style/mainStyle'

function TodayCommit(props){
    let [ render,renderChange ] = useState(false);
    let userId = localStorage.getItem("user");

    useEffect(()=>{
        if(Object.keys(props.userData).length <= 0){
            axios.get(`https://api.github.com/users/${userId}`)
            .then((data)=>{
                Object.assign(props.userData,data.data);
                renderChange(true);
                // cummitCheck(userId);
            }).catch(e=>{
                console.log(e)
                alert("network error");
                window.location.href = "/";
            })
        }
    },[]);

    if(render){
        return(
            <>
                <TodayCommitDiv>
                    <TodayWrapper>
                        <UserPro src={props.userData.avatar_url} alt="userPro"/>
                        <CommitPro>
                            <CommitProTextWrapper>
                                <MainText>{props.userData.login}</MainText>
                                <SubText>{props.userData.name}</SubText>
                                <SubText>{props.userData.bio}</SubText>
                            </CommitProTextWrapper>
                        </CommitPro>
                    <TodayMain height={window.innerHeight}>
                        <Commits user={userId}></Commits>
                    </TodayMain>
                    </TodayWrapper>
                </TodayCommitDiv>
            </>
        );
    }
    else{
        return(
            <p>rendering</p>
        )
    }
}

export default TodayCommit;