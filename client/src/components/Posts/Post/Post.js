import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import moment from 'moment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import "./Post.css";

// const Post = ({ post, setCurrentId }) => {
//     const dispatch = useDispatch();

//     return (
//         <Card sx={{ mt: "5%" }}>
//             <CardMedia sx={{ height: "15rem" }} image={post.selectedFile} title={post.selectedFile} />
//             <div>
//                 <Typography sx={{ ml: "5%" }} variant="h6"> {post.creator} </Typography>
//                 <Typography sx={{ ml: "5%" }} variant="body2"> {moment(post.createdAt).fromNow()} </Typography>
//             </div>
//             <div>
//                 <Button style={{ color: 'black' }} size="large" onClick={() => setCurrentId(post._id)}>
//                     <MoreHorizIcon fontSize="default" />
//                 </Button>
//             </div>
//             <div>
//                 <Typography sx={{ ml: "5%" }} variant="body2" color="textSecondary"> {post.tags.map((tag) => `#${tag} `)} </Typography>
//             </div>
//             <Typography sx={{ ml: "5%" }} variant="h5" gutterBottom> {post.title} </Typography>
//             <CardContent sx={{ p: 0, ml: "5%" }}>
//                 <Typography variant="h5" gutterBottom> {post.message} </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
//                     <ThumbUpAltIcon fontSize='small' />
//                     &nbsp; Like &nbsp;
//                     {post.likeCount}
//                 </Button>
//                 <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
//                     <DeleteIcon fontSize='small' />
//                     &nbsp; Delete &nbsp;
//                 </Button>
//             </CardActions>
//         </Card>
//     )
// }

// export default Post;

// const Post = ({ post, setCurrentId }) => {
//     const dispatch = useDispatch();

//     return (
//       <Card sx={{ mt: '5%' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <div>
//             <Typography sx={{ ml: '5%' }} variant="h6">
//               {post.creator}
//             </Typography>
//             <Typography sx={{ ml: '5%' }} variant="body2">
//               {moment(post.createdAt).fromNow()}
//             </Typography>
//           </div>
//           <div>
//             <Button
//               style={{ color: 'black' }}
//               size="large"
//               onClick={() => setCurrentId(post._id)}
//             >
//               <MoreHorizIcon fontSize="default" />
//             </Button>
//           </div>
//         </div>
//         <CardMedia sx={{ height: '15rem' }} image={post.selectedFile} title={post.selectedFile} />
//         <div>
//           <Typography sx={{ ml: '5%' }} variant="body2" color="textSecondary">
//             {post.tags.map((tag) => `#${tag} `)}
//           </Typography>
//         </div>
//         <Typography sx={{ ml: '5%' }} variant="h5" gutterBottom>
//           {post.title}
//         </Typography>
//         <CardContent sx={{ p: 0, ml: '5%' }}>
//           <Typography variant="h5" gutterBottom>
//             {post.message}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
//             <ThumbUpAltIcon fontSize="small" />
//             &nbsp; Like &nbsp;
//             {post.likeCount}
//           </Button>
//           <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
//             <DeleteIcon fontSize="small" />
//             &nbsp; Delete &nbsp;
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   };

//   export default Post;

// const Post = ({ post, setCurrentId }) => {
//     const dispatch = useDispatch();

//     return (
//       <Card sx={{ mt: "5%" }}>
//         <div style={{ position: "relative" }}>
//           <CardMedia sx={{ height: "15rem" }} image={post.selectedFile} title={post.selectedFile} />
//           <div style={{ position: "absolute", top: 0, left: 0, padding: "1rem", display: 'flex', justifyContent: 'space-between' }}>
//             <Typography variant="h6" sx={{ color: "white" }}>
//               {post.creator}
//             </Typography>
//             <Button
//               style={{ color: "white" }}
//               size="large"
//               onClick={() => setCurrentId(post._id)}
//             >
//               <MoreHorizIcon fontSize="default" />
//             </Button>
//           </div>
//         </div>
//         <div>
//           <Typography sx={{ ml: "5%" }} variant="body2">
//             {moment(post.createdAt).fromNow()}
//           </Typography>
//         </div>
//         <div>
//           <Typography sx={{ ml: "5%" }} variant="body2" color="textSecondary">
//             {post.tags.map((tag) => `#${tag} `)}
//           </Typography>
//         </div>
//         <Typography sx={{ ml: "5%" }} variant="h5" gutterBottom>
//           {post.title}
//         </Typography>
//         <CardContent sx={{ p: 0, ml: "5%" }}>
//           <Typography variant="h5" gutterBottom>
//             {post.message}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button
//             size="small"
//             color="primary"
//             onClick={() => dispatch(likePost(post._id))}
//           >
//             <ThumbUpAltIcon fontSize="small" />
//             &nbsp; Like &nbsp;
//             {post.likeCount}
//           </Button>
//           <Button
//             size="small"
//             color="primary"
//             onClick={() => dispatch(deletePost(post._id))}
//           >
//             <DeleteIcon fontSize="small" />
//             &nbsp; Delete &nbsp;
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   };

//   export default Post;

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <Card sx={{ mt: "5%", height: "28rem" }}>
            <div style={{ position: "relative" }}>
                <CardMedia sx={{ height: "15rem" }} image={post.selectedFile} title={post.selectedFile} />
                <Typography style={{ position: "absolute", top: 0, left: 0, padding: "1rem" }} variant="h6" sx={{ color: "white" }}>
                    {post.creator}
                </Typography>
                <Button
                    style={{ color: "white", position: "absolute", top: 0, right: 0, padding: "1rem" }}
                    size="large"
                    onClick={() => setCurrentId(post._id)}
                >
                    <MoreHorizIcon fontSize="large" />
                </Button>
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
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize='small' />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                    &nbsp; Delete &nbsp;
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;