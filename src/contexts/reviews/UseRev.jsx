import { ThumbsUp,Smile,BadgeCheck} from "lucide-react";
import iPhone from '/src/assets/productImage/iphone.jpg'
import React, { createContext, useContext,useState } from "react";
const RevContext = createContext();
export const useRev = ()=>{
    return useContext(RevContext);
}

const RevProvider = ({children}) =>{
    const demoReviews = [
        {
            id:1,
            title: 'iPhone 15 pro max',
            review:'The product is good enough!The product is good enough!The product is good enough!The product is good enough! ',
            rating:5.0,
            date:'12-10-24',
            likes:12,
            category:'Electronics',
            comments: [
                {
                    id:1,
                    userId:1,
                    comment:'Thanks for such a good review!!',
                    replys: [
                        {
                            id:1,
                            userId:2,
                            reply:'Thans for your comment'
                        }
                    ]

                }
            ,],
            img:iPhone,
            user:'@enamul11200'
        },
        {
            id:2,
            title: 'The Seven Kingdom',
            review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam vitae odio in quis deserunt dolores soluta mollitia veritatis nesciunt',
            rating:5.0,
            date:'12-10-24',
            likes:30,
            category:'Tv Show-Movie',
            comments: [
                {
                    userId:1,
                    comment:'Thanks for such a good review!!',
                    replys: [
                        {
                            userId:2,
                            reply:'Thans for your comment'
                        }
                    ]

                }
            ,]
            ,
            img:'https://cdn.pixabay.com/photo/2024/09/02/12/03/ai-generated-9016627_960_720.jpg',
            user:'@enamul11200'
        },
        {
            id:3,
            title: 'The Natural Journal',
            review:'The Natural Journal is of the best journal to publish or find research papers   ',
            rating:3.0,
            date:'12-10-24',
            likes:5,
            category:'Journal-papers',
            comments: [
                {
                    userId:1,
                    comment:'Thanks for such a good review!!',
                    replys: [
                        {
                            userId:2,
                            reply:'Thans for your comment'
                        }
                    ]

                }
            ,],
            user:'@enamul11200',
            img:'https://cdn.pixabay.com/photo/2016/03/22/09/44/breakfast-1272462_960_720.jpg',
        },
        {
            id:4,
            title: 'Oxford English Dictionary',
            review:'The Natural Journal is of the best journal to publish or find research papers   ',
            rating:5.0,
            date:'12-10-24',
            likes:50,
            category:'Books',
            comments: [
                {
                    userId:1,
                    comment:'Thanks for such a good review!!',
                    replys: [
                        {
                            userId:2,
                            reply:'Thans for your comment'
                        }
                    ]

                }
            ,],
            user:'@enamul11200',
            img:'https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_960_720.jpg',
        },
        {
            id:5,
            title: 'The Natural Journal',
            review:'The Natural Journal is of the best journal to publish or find research papers   ',
            rating:3.0,
            date:'12-10-24',
            likes:5,
            category:'Journal-papers',
            comments: [
                {
                    userId:1,
                    comment:'Thanks for such a good review!!',
                    replys: [
                        {
                            userId:2,
                            reply:'Thans for your comment'
                        }
                    ]

                }
            ,],
            user:'@enamul11200',
            img:'https://cdn.pixabay.com/photo/2016/03/22/09/44/breakfast-1272462_960_720.jpg',
        }
    ]
    const [reviews,setReviews] = useState(demoReviews);
    const [comments,setComments] = useState([]);
    const addReview = (rev) =>{
        setReviews((prev)=> [,rev,...prev])
    }
    const deleteReview = (id)=>{
        setReviews((prev)=>prev.filter((rev)=>rev.id != id))
    }
    const updateReview = (id,rev)=>{
        setReviews((prev)=> prev.map((review)=> review.id == id? rev : review))
    }
    const addComment = (id,comment) =>{
        setReviews((prev)=> prev.map((review)=> {
            if(review.id == id){
                return {
                    ...review,
                    comments:[...review.comments,comment]
                }
            }
            return review
        }))
    }
    const updateComment = (reviewId,commentId,newComment)=>{
        setReviews((prevRev)=>prevRev.map(review =>{
            if(review.id == reviewId){
                return {
                    ...review,
                    comments:review.comments.map(oldComment =>{
                        if(comment.id == commentId){
                            return {
                                ...oldComment,
                                comment:newComment
                            }
                        }
                    })
                }
            }
        }))
    }
    const deleteComment =(reviewId,commentId) =>{
        setReviews(prevReviews => prevReviews.map(review => {
            if(review.id == reviewId){
                return {
                    ...review,
                    comments:review.filter(comment=> comment.id != commentId)
                }
            }
        }))
    }

    const addReply = (reviewId,commentId,reply)=>{
        setReviews((prevReviews)=>prevReviews.map(review=> {
            if(review.id == reviewId){
                return {
                    ...review,
                    comments: review.comments.map(comment => {
                        if(comment.id == commentId){
                            return {
                                ...comment,
                                reply: [...comment.replys,reply]
                            }
                        }
                        return comment
                    })
                }
            }
            return review;
        }))
    }
     return (
        <RevContext.Provider value={{addReview,reviews,comments,setComments,setReviews,demoReviews,addComment,updateComment,updateReview,deleteComment,deleteReview,addReply}}>
            {children}
        </RevContext.Provider>
    )
};
export default RevProvider;

