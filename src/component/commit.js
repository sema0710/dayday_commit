import axios from 'axios'
import React , { useState , useEffect}  from 'react'
import { CommitDiv, CommitImg, CommitRepo, CommitMessage, CommitTextDiv, CommitType} from '../style/mainStyle'

function Commit(props){
    const commit = props.data.payload.commits;
    const repo = props.data.repo;

    const [ data, dataChange ] = useState();
    const [ render, renderChange ] = useState(false);
    const [ commitData, commitDataChange ] = useState(null);

    const getRepoInfo = (url)=>{
        axios({
            method:"GET",
            url:url,
        }).then((req)=>{
            dataChange(req.data);
            getCommitInfo(commit ? commit.length ? commit[0].url : repo.url : repo.url);
        })
    }
    
    const getCommitInfo = (url)=>{
        axios({
            method:"GET",
            url:url,
        }).then((req)=>{
            commitDataChange(req.data);
            renderChange(true);
        })
    }   

    useEffect(()=>{
        getRepoInfo(props.data.repo.url);
    },[])
    
    if(render){
        return(
            <>
                <CommitDiv onClick={()=>{window.location.href=commitData.html_url}}>
                    <CommitImg src={data.organization ? data.organization.avatar_url : data.owner.avatar_url} alt="actorImg"/>
                    <CommitTextDiv>
                        <CommitType>{props.data.type}</CommitType>
                        <CommitRepo>{data.full_name}</CommitRepo>
                        <CommitMessage>{data.description ? data.description : "설명이 없습니다."}</CommitMessage>
                    </CommitTextDiv>
                </CommitDiv>
            </>
        );
    }
    else{
        return(
            <></>
        );
    }

}

export default Commit;