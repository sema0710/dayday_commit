import styled from 'styled-components'

export const MainPage = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
`

export const MainWrapper = styled.div`
    width:1000px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`

export const MainInput = styled.input`
    width:800px;
    height:70px;
    font-size:50px;
    text-align:center;
    margin-bottom:30px;
    font-family: 'Calistoga' , cursive;
`

export const MainSearchButton = styled.button`
    width:250px;
    height:60px;
    background-color:yellowgreen;
    border:none;
    border-radius:50px;
    font-size:30px;
    color:white;
    font-family: 'Calistoga' , cursive;
`
export const MainTitle = styled.p`
    font-size:60px;
    color:black;
    text-align:center;
    font-weight:600;
    font-family: 'Calistoga', cursive;
`
export const TodayCommitDiv = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
`

export const TodayWrapper = styled.div`
    display:flex;
    /* justify-content:center; */
    width:800px;
    flex-wrap:wrap;
`

export const UserPro = styled.img`
    width:200px;
    height:200px;
`

export const MainText = styled.p`
    font-size:30px;
    font-weight:600;
`

export const SubText = styled.p`
    font-size:20px;
    color:#707070;
    font-weight:600;
`

export const CommitProTextWrapper = styled.div`
`

export const CommitPro = styled.div`
    height:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:25px;
`

export const TodayMain = styled.div`
    width:800px;
    height:${props => props.height - 200}px;
`

export const Title = styled.p`
    font-size:40px;
    font-weight:600;
    text-align:center;
`

export const CommitDiv = styled.div`
    width:900px;
    height:200px;
    display:flex;
    flex-wrap:wrap;
    /* align-items:center; */
`
export const CommitImg = styled.img`
    width:100px;
    height:100px;
`

export const CommitRepo = styled.p`
    font-size:25px;
    font-weight:600;
    margin:10px;
    height:auto;
`

export const CommitMessage = styled.p`
    font-size:18px;
    font-weight:600;
    margin:10px;
`

export const CommitTextDiv = styled.div`
    width:800px;
`

export const CommitType = styled.p`
    font-size:15px;
    font-weight:600;
    color:gray;
    margin-left:10px;
`