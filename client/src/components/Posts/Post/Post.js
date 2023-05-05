import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import moment from 'moment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import "./Post.css";

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.userObject?.googleId || user?.userObject?._id))
                ? (
                    <React.Fragment>
                        <ThumbUpAltIcon fontSize="small" /> &nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ""}`}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <ThumbUpOutlinedIcon fontSize="small" /> &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                    </React.Fragment>
                )
        }
        return (
            <React.Fragment>
                <ThumbUpAltIcon fontSize="small" /> &nbsp;Like
            </React.Fragment>
        )
    };

    return (
        <Card sx={{ mt: "5%", height: "30rem" }}>
            <div style={{ position: "relative" }}>
                <CardMedia sx={{ height: "15rem" }} image={post.selectedFile} title={post.selectedFile} />
                <Typography style={{ position: "absolute", top: 0, left: 0, padding: "1rem" }} variant="h6" sx={{ color: "white" }}>
                    {post.name}
                </Typography>
                {(user?.userObject?.sub === post?.creator || user?.userObject?._id === post?.creator) && (
                    <Button
                        style={{ color: "white", position: "absolute", top: 0, right: 0, padding: "1rem" }}
                        size="large"
                        onClick={() => setCurrentId(post._id)}
                    >
                        <MoreHorizIcon fontSize="large" />
                    </Button>
                )}
            </div>
            <div>
                <Typography sx={{ ml: "5%" }} variant="body2"> {moment(post.createdAt).fromNow()} </Typography>
            </div>
            <div>
                <Typography sx={{ ml: "5%" }} variant="body2" color="textSecondary"> {post.tags.map((tag) => `#${tag} `)} </Typography>
            </div>
            <Typography sx={{ ml: "5%" }} variant="h5" gutterBottom> {post.title} </Typography>
            <CardContent className="card-content" sx={{ p: 0, ml: "5%" }}>
                <Typography fontSize="1em" variant="h5" gutterBottom> {post.message} </Typography>
            </CardContent>
            
            <CardActions>
                {/* if we don't have a user, we disable the like button */}
                <Button size="small" color="secondary" disabled={!user?.userObject} onClick={() => dispatch(likePost(post._id))}  >
                    <Likes />
                </Button>
                {/* check to see if the user is the post creator, if so, show the delete button. */}
                {(user?.userObject?.sub === post?.creator || user?.userObject?._id === post?.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" />Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post;