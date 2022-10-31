import React from "react";
import {useNavigate} from 'react-router-dom';
function LogOut() {
  const navigate = useNavigate()
  
  function handleDelete() {
    
    fetch("/logout", {
      method: "DELETE",
      
    }).then((r) => {
      if (r.ok) {
        navigate("/login")
      }
    
      
      } )
  }
  return(

<div className="form-group">
            <button
              onClick={handleDelete}
              type="button"
              className="btn btn-primary btn-block"
            >
              Log Out!
            </button>
</div>
  );
}
export default LogOut;