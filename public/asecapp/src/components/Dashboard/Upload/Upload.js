import React from 'react';
const Upload = (props)=>{
    return (
        <div className="container" >
        <h1 className="center-align flow-text">Upload Pdfs</h1>
            <form>
                <div className="file-field input-field">
                <div className="btn" >
                    <span>Select Pdf</span>
                    <input type="file" onChange={props.uploadHandler}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                </div>
            </form>
        </div>
    );
}

export default Upload;