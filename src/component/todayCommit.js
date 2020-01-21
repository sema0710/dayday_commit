import React, { useEffect , useState } from 'react'
import {} from '../style/mainStyle'
import axios from 'axios'
import Commits from './commits'
import { UserPro , TodayCommitDiv, TodayWrapper, MainText, SubText , CommitProTextWrapper, CommitPro, TodayMain } from '../style/mainStyle'
import { useParams } from 'react-router-dom'

function TodayCommit(){
    let [render, renderChange] = useState(false);
    const [userData, userDataChange] = useState();
    const { userId } = useParams();

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${userId}`)
        .then((data)=>{
            userDataChange(data.data);
            renderChange(true);
        }).catch(()=>{
            alert("network error");
        })
    },[]);

    if(render){
        return(
            <>
                <TodayCommitDiv>
                    <TodayWrapper>
                        <UserPro src={userData.avatar_url} alt="userPro"/>
                        <CommitPro>
                            <CommitProTextWrapper>
                                <MainText>{userData.login}</MainText>
                                <SubText>{userData.name}</SubText>
                                <SubText>{userData.bio}</SubText>
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