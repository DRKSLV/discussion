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
    }, [load]) 

    return comments
}

export function useComments(ids) {
    var [commentArray, setCommentArray] = useState([]);

    useEffect(() => {
        ids.forEach((id) => {
            //FEtch
            Axios.get(apiUrl+"/comment/"+id)
            .then((res) => {
                setCommentArray((e) => [...e, res.data]);
            })
            .catch();
        })
        
    }, [ids]) 

    return commentArray
}