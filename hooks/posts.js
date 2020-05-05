import { useState, useEffect } from "react";
import Axios from "axios";
import { apiUrl } from "../constants";

export function usePostIds() {
    var [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get(apiUrl+"/post")
        .then((res) => {
            setPosts(res.data);
        })
        .catch();
    }, []) 

    return posts
}

export function usePosts(ids) {
    var [postArray, setPostArray] = useState([]);

    useEffect(() => {
        var promises = ids.map((id) => {
            //FEtch
            return Axios.get(apiUrl+"/post/"+id)
        })
        Promise.all(promises)
        .then((e) => {
            setPostArray(e.map((res)=>res.data));
        })
        .catch();             
    }, [ids]) 

    return postArray
}