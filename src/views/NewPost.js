import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewPost(props) {
    let navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        let title = e.target.title.value;
        let body = e.target.body.value;

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + props.token);
        myHeaders.append("content-Type", "application/json");

        let data = JSON.stringify({
            "title": title,
            "body": body
        })

        await fetch('https://kekambas-blog.herokuapp.com/blog/posts', {
            method: "POST",
            headers: myHeaders,
            body: data
        }).then(res => res.json())
            .then(data => {
                navigate('/')
            })
    }

    return (
        <>
            <h1 className='text-center'>Make a New Post Here</h1>
            <form className='mt-5 w-50 mx-auto' onSubmit={handleForm}>
                <fieldset className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' placeholder='Post Title' className='form-control'/>
                </fieldset>

                <fieldset className='form-group'>
                    <label htmlFor='body'>Body</label>
                    <input type='text' name='body' placeholder='Tell us about your day...' className='form-control'/>
                </fieldset>
                <input type='submit' value='Post' className='mt-3'/>
            </form>
        </>
    );
}