import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import { Card } from 'antd';
import CustomForm from "../components/Form";

function ArticleDetail() {
    const [article, setArticle] = useState([]);
    const {articleID} = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => { setArticle(res.data) })
            .catch(err => console.error(err))
    }, [article, articleID])


    return (
        <>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <CustomForm
                requestType="put"
                buttonName="Update"
                articleID={articleID}
            />
        </>
    );
}

export default ArticleDetail;