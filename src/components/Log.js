import React from 'react';
import './Log.css';
const Log = ()=>(
    <>
    <div>
        <div className="col-1">
            
            <div className="loginForm" >
                    <label for="name">Username</label>
                    
                    <input type="text" id="name"placeholder="username"></input>

                    <label for="passwd">Password</label>
                    <input type="text" id="passwd" placeholder="passwd"></input>
                    <button>Submit</button>
                
                
            </div>
        </div>
        
        <div className="col-2">
        </div>
    </div>
    </>
)
export default Log;