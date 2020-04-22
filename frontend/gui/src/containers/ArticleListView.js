import React, {useState, useEffect} from "react";
import { getDataAPI } from '../helpers/connect';
import Articles from '../components/Article';
import CustomForm from "../components/Form";



function ArticleList() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function getData (){
            setArticles(await getDataAPI())
        }
        getData();
    }, [])

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