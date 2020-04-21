import React, {useState, useEffect} from "react";
import axios from 'axios';
import Articles from '../components/Article';
import CustomForm from "../components/Form";



function ArticleList() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {setArticles(res.data)})
        .catch(err => console.error(err))
    }, [articles])
    
    return (
        <>
            <Articles data={articles} />
            <br />
            <h2>Create an Article</h2>
            <CustomForm 
            requestType="post"
            buttonName="Submit"
            articleID={null}
            />
        </>
    );
}

export default ArticleList;