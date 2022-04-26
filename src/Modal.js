import React from 'react'
import "./Modal.css"
import Backdrop from './Backdrop'

const Modal =(props) =>{
    return(
        <div>
            <Backdrop show={props.show} modalClose={props.modalClose} />
            <div className="modal"
            style = {
                {transform: props.show ? 'translateX(0)' : 'translateX(-100vh)',
                opacity: props.show ? '1' : '0',
                visibility: props.show ? 'visible' : 'hidden',
                }}
            >
                {props.children}
            </div>
        </div>
    )
}
export default Modal