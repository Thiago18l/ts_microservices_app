import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IPost {
    id: string | number;
}
interface IComment {
    id: string | number;
    content: string;
}


export default ({ id }: IPost): JSX.Element => {
    const [comments, setComments] = useState<IComment[]>([]);


    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:8070/posts/${id}/comments`);
            setComments(result.data);
        }
        fetchData();
    }, [comments, id]);


    const renderComments = comments.map((comment: IComment): JSX.Element => {
        return (
            <li key={comment.id}>
                {comment.content}
            </li>
        );
    });
    return (
        <div>
            <ul>
                {renderComments}
            </ul>
        </div>
    );
}
