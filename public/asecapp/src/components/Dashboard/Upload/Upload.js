import React from 'react';
import { Toast } from 'react-materialize';

const Upload = (props)=>{
    return (
        <div className="container" >
        <h1 className="center-align flow-text">Upload Pdfs</h1>
            <form  action="#">
                <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file" onChange={props.uploadHandler}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                </div>
            </form>
            {(props.toast !== null)?<Toast toast={props.toast}/>:null}
        </div>
    );
}

export default Upload;