import {useState, useEffect} from 'react';
import axios from "axios";

import UpIcon from "../res/img/upvote5.svg";
import DownIcon from "../res/img/downvote5.svg";

import style from "../style/post.module.sass";

export function Vote(props) {
    //Props
    var votes = props.votes;
    var voteCount = votes[0] ? ((votes[0].upvotes || 0) - (votes[0].downvotes || 0)) : 0

    //Hooks
    const [vote, setVote] = useState(0);

    //Api
    useEffect(() => {
    }, [vote]);

    //events
    function click(val) {
        setVote(val);
    }

    return (
        <div className={style.vote}>
            <UpIcon onClick={() => click(1)}></UpIcon>
            <span>{voteCount}</span> 
            <DownIcon onClick={() => click(-1)}></DownIcon>
        </div>
    );
}