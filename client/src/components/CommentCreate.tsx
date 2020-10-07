import React, { useState } from 'react';
import axios from 'axios';
interface IPost {
    id: string | number;
}


export default ({ id }: IPost) => {
    const [content, setContent] = useState('');
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post(`http://localhost:8070/posts/${id}/comments`, {
            content
        });
        setContent('');
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>New comment</label>
                    <input value={content} 
                    onChange={e => setContent(e.target.value)} 
                    type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}