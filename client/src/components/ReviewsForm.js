import React, {useState} from 'react';
import Home from './Home';

function Comments({onSubmission}){
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');
    const[newCommentForm, setNewCommentForm]= useState({text:""})
    const [isSending, setIsSending] = useState(false);
    const [show, setShow] = useState(false);
    
    function handleClick(){
        setIsSending(isSending=>!isSending)
      }

    function handleOnChange(event){
        event.preventDefault()
        setText(event.target.value)
        setNewCommentForm(newCommentForm=>({...newCommentForm,[event.target.name]: event.target.value}))
        }

        function handleSubmit(event){
            event.preventDefault()
            setIsSending(true);
            setDisplayText(text)
            onSubmission(newCommentForm)
            setNewCommentForm({text:""})
           
            
        }

    return(
        <div>
        
            <form onSubmit={handleSubmit}>
            
                
                
                   
                <textarea onChange={handleOnChange} name='text'  value={newCommentForm.text} placeholder="Your Comment" rows={1}></textarea>
                <input
					type="submit" onClick={handleClick}
					// disabled={isSending}
					value={isSending ? "Send" : "Send Comment"}
				/>
{displayText && <p>{displayText }</p>}
            </form>
        </div>
    )
}
export default Comments;