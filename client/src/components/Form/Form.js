import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import "./Form.css";


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
          } else {
            dispatch(updatePost(currentId, postData));
            clear();
          }
    }

    const clear = () => {
        setCurrentId(0);
        setPostData ({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
    }

    return (
        // <Paper sx={{ marginTop:"5%" }}>
        <Paper sx={{ marginTop:"4%", padding: "2rem" }}> 

            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography  align="center" variant="h6"> {currentId ? 'Editing' : 'Creating' } a Travel Destination </Typography>

                <TextField 
                    name="creator" 
                    sx={{ mt: 1, mb: 2}} 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth 
                    value={postData.creator} 
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}>
                </TextField>
                <TextField 
                    name="title" 
                    sx={{ mt: 1, mb: 2}} 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}>
                </TextField>
                <TextField 
                    name="message" 
                    sx={{ mt: 1, mb: 2}} 
                    variant="outlined" 
                    label="Message" 
                    fullWidth 
                    value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}>
                </TextField>
                <TextField 
                    name="tags" 
                    sx={{ mt: 1, mb: 2}} 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth 
                    value={postData.tags} 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}>
                </TextField>
                <div >
                    <FileBase 
                        className="file-input" 
                        type="file" 
                        multiple={false} 
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} 
                    />
                </div>
                <Button sx={{ mt: 2, mb: 2}} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
                <Button sx={{ mt: 2, mb: 2}} variant="contained" color="secondary" size="large" onClick={clear} fullWidth> Clear </Button>
            </form>
        </Paper>
    );
}

export default Form;