import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) =>
  props.show ? (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'traslateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </>
  ) : null

export default Modal
