import React from 'react';
import classes from './Upload.css';
const Upload = (props)=>{
    return (
        <div>
            {(props.progressBar === true)?<div className={"progress "+classes.progress}>
                <div className="indeterminate"></div>
            </div>:null
            }
            <div className="container" >
            <h1 className="center-align flow-text">Upload Pdfs</h1>
                <div className="row">
                    <form className="col s12 m12">
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
                    <div className="center-align"><a onClick={props.uploadHandlerSubmit} className="waves-effect waves-light btn"><i className="material-icons right">cloud_upload</i>Upload</a></div>
                </div>
            </div>
        </div>
    );
}

export default Upload;