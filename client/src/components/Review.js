import { Fragment, useState } from "react";
import React from "react";
import Reviews from "./Reviews";

 function Review(){
    const [review, setReview] = useState([]);
	// const [isSending, setIsSending] = useState(false);
	 

	function handleNewReview(newReviewData){

        const serverOptions={
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            
            },
            body:JSON.stringify(newReviewData
            )
            }
            fetch('/reviews', serverOptions)
            .then(r=>r.json())
            .then(addedReview=>setReview(reviews=>[...reviews, addedReview]))
			
        }
	return (
			<Reviews onSubmission={handleNewReview}/>
	);
}
export default  Review;