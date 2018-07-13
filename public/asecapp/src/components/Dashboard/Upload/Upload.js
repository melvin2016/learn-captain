import React from 'react';
import classes from './Upload.css';
import pdfImg from './pics/pdf.png';
import moment from 'moment';
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
                    <div className="center-align"><a  className="waves-effect waves-light btn" onClick={props.uploadHandlerSubmit}><i className="material-icons right">cloud_upload</i>Upload</a></div>
                </div>
                {(props.uploadedFiles !== null)?
                    <div className="row">
                        <div className="col s12 m12">
                            <ul className="collection">
                                {props.uploadedFiles !== null ? props.uploadedFiles.map((ele)=>{
                                    console.log(ele);
                                    return (
                                        <li key={ele._id} className="collection-item avatar" >
                                            <img src={pdfImg} alt="" className="circle"/>
                                            <span className="title">{ele.originalName}</span>
                                            <p style={{color:'gray'}}>
                                                Uploaded By {ele.userid}<br/>
                                                 {moment(ele.created).format('Do MMM \'YY - h:mm a')}
                                            </p>
                                            <div><a className={"secondary-content "+classes.hoverable} download><i  className="material-icons" onClick={()=>{
                                                return props.downloadPdf(ele._id,ele.originalName);
                                            }} >cloud_download</i></a></div>
                                        </li>
                                    );
                                }) :  null}
                            </ul>
                        </div>
                    </div>:null
                }
            </div>
        </div>
    );
}

export default Upload;