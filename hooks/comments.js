import { useState, useEffect } from "react";
import Axios from "axios";
import { apiUrl } from "../constants";

export function useCommentIds(load, entityId) {
    var [comments, setComments] = useState([]);
    
    useEffect(() => {
        if(load) {
            Axios.get(apiUrl+"/entity/"+entityId+"/comments")
            .then((res) => {
                setComments(res.data.map(e=>e.id));
            })
            .catch();
        }
    }, [load, entityId]) 

    return comments
}

export function useComments(ids) {
    var [commentArray, setCommentArray] = useState(["not epic"]);

    useEffect(() => {
        if(!ids[0]) 
            return;

        var promises = ids.map((id) => {
            //FEtch
            return Axios.get(apiUrl+"/comment/"+id)
        })
        Promise.all(promises)
        .then((e) => {
            setCommentArray(e.map((res)=>res.data).filter((lol) => lol.level>0));
        })
        .catch();    
    }, [ids]) 

    return commentArray
}