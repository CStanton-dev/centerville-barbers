import { useEffect } from 'react'
import styles from './styles/Modal.module.css'

export default function Modal(props) {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return (
    <div className={`${styles.Modal} ${props.show ? styles.show : ''}`} onClick={props.onClose}>
      <div className={styles.ModalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.ModalHeader}>
          <h4 className={styles.ModalTitle}>{props.title}</h4>
        </div>
        <div className={styles.ModalBody}>
          {props.children}
        </div>
        <div className={styles.ModalFooter}>
          <button className={styles.CloseButton}onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}