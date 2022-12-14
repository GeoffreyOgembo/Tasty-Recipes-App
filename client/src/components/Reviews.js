import React, {useState} from 'react';


function Reviews({onSubmission}){
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');
    const[newReviewForm, setNewReviewForm]= useState({text:""})
    const [isSending, setIsSending] = useState(false);
    const [show, setShow] = useState(false);
    
    function handleClick(){
        setIsSending(isSending=>!isSending)
      }

    function handleOnChange(event){
        event.preventDefault()
        setText(event.target.value)
        setNewReviewForm(newReviewForm=>({...newReviewForm,[event.target.name]: event.target.value}))
        }

        function handleSubmit(event){
            event.preventDefault()
            setIsSending(true);
            setDisplayText(text)
            onSubmission(newReviewForm)
            setNewReviewForm({text:""})
           
            
        }

    return(
        <div>
        
            <form onSubmit={handleSubmit}>
            
                
                
                   
                <textarea onChange={handleOnChange} name='text'  value={newReviewForm.text} placeholder="Your Review" rows={1}></textarea>
                <input
					type="submit" onClick={handleClick}
					// disabled={isSending}
					value={isSending ? "Send" : "Send Review"}
				/>
{displayText && <p>{displayText  }</p>}
            </form>
        </div>
    )
}
export default Reviews;


