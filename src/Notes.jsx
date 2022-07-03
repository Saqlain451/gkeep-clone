import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { click } from '@testing-library/user-event/dist/click';
const Notes = ({title,content,onclick,id}) => {
  return (
    <>
        <div className="col-5 col-md-2">
            <div className="card mt-4 ms-2">
                <div className="card-body">
                    <h5>{title}</h5>
                    <p>{content}</p>
                    <button className="btn btn-outline-warning mt-1" 
                    onClick={()=>{onclick(id)}}><DeleteIcon/></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Notes
