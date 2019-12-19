import axios from 'axios'
import React , { useState , useEffect}  from 'react'
import { Title, MainText, SubText, CommitDiv } from '../style/mainStyle'
import Commit from './commit'

function Commits(props){
    let user = props.user;
    let commits = [];
    const [iscommit,commitChange] = useState(false);
    const [commit,commitAdd] = useState("");

    const cummitCheck = (user)=>{
        axios.get(`https://api.github.com/users/${user}/events`)
        .then((e)=>{
            commitAdd(setCommits(e.data));
            const date = e.data[0].created_at;
            const r = /([0-9]+)/g;
            const timeArray = date.match(r);
            const cummitTime = new Date(Date.UTC(timeArray[0], timeArray[1]-1, timeArray[2], timeArray[3], timeArray[4], timeArray[5]));
            const now = new Date();

            if(now.getDate() !== cummitTime.getDate()){
                commitChange("커밋 하셈;;");
            }
            else{
                commitChange("목표 달성!")
            }
            commits.push(<p>asdf</p>);
        })
    }

    const setCommits = (data)=>{
        let commits = [];
        for(let i in data){
            commits.push(<Commit data={data[i]} key={i}></Commit>)
        }
        return commits;
    }

    useEffect(()=>{
        cummitCheck(user);
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
    }
    else{
        return(
            <p>rendering</p>
        );
    }

}

export default Commits;