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

export function usePosts(posts) {
    var [postArray, setPostArray] = useState([]);

    useEffect(() => {
        posts.forEach((post) => {
            //FEtch
            Axios.get(apiUrl+"/post/"+post)
            .then((res) => {
                setPostArray((e) => [...e, res.data]);
            })
            .catch();
        })
        
    }, [posts]) 

    return postArray
}