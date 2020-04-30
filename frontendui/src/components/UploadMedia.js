import React, {useMemo,useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
  // -------------------Image Style---------

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

function UploadMedia(props){
    const [files, setFiles] = useState([]);
    const {
        acceptedFiles,
       // rejectedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
      } = useDropzone({accept: 'image/*', onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }});
      const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragActive,
        isDragReject,
        isDragAccept
      ]);
      const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img alt="not selected"
              src={file.preview}
              style={img}
            />
          </div>
        </div>
      ));
    
      useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
      }, [files]);

      
  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <section className="container">
    <div {...getRootProps({style})}>
      <input {...getInputProps()} />
      <p>Drag an image here, or click to select Image</p>
      <em>(Only *.jpeg and *.png images will be accepted)</em>
    </div>
    <aside>
      <h4>Accepted files</h4>
      <ul>
        {acceptedFilesItems}
      </ul>
    </aside>
    <aside style={thumbsContainer}>
        {thumbs}
      </aside>
  </section>
  );
  }
  export default UploadMedia