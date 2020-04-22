import React, {useState, useEffect} from "react";
import { getDataAPI } from '../helpers/connect';
import { useParams } from 'react-router';
import { Card } from 'antd';
import CustomForm from "../components/Form";

function ArticleDetail() {
    const [article, setArticle] = useState([]);
    const {articleID} = useParams();

    useEffect(() => {
        async function getData (){
            setArticle(await getDataAPI(articleID))
        }
        getData();
    }, [articleID])
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