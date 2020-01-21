import axios from 'axios'
import React , { useState , useEffect}  from 'react'
import { Title, MainText, SubText, CommitDiv } from '../style/mainStyle'
import Commit from './commit'

function Commits(props){
    let user = props.user;
    const [iscommit,commitChange] = useState(false);
    const [commit,commitAdd] = useState("");

    const commitCheck = (user)=>{
        axios.get(`https://api.github.com/users/${user}/events`)
        .then((e)=>{
            commitAdd(setCommits(e.data));
            const date = e.data[0].created_at;
            const commitTime = getLastCommit(date);
            const now = new Date();
            dateCompare(now,commitTime);
        })
        .catch((e)=>{
            commitChange('최근 정보가 없습니다')
        })
    }
    
    const dateCompare = (now,commitTime) => {
        if(now.getDate() !== commitTime.getDate()){
            commitChange("커밋 하셈;;");
        }
        else{
            commitChange("목표 달성!")
        }
    }

    const getLastCommit = (date) => {
        
        const r = /([0-9]+)/g;
        const timeArray = date.match(r);
        const commitTime = new Date(Date.UTC(timeArray[0], timeArray[1]-1, timeArray[2], timeArray[3], timeArray[4], timeArray[5]));
        return commitTime;
    }

    const setCommits = (data)=>{
        let commits = [];
        for(let i in data){
            commits.push(<Commit data={data[i]} key={i}></Commit>)
        }
        return commits;
    }

    useEffect(()=>{
        commitCheck(user);
    },[])
    
    if(iscommit){
        return(
            <div>
                <Title>
                    {iscommit}
                </Title>
                <SubText>최근 커밋</SubText>
                {commit}
            </div>
        );
    } else{
        return(
            <p>rendering</p>
        );
    }

}

export default Commits;