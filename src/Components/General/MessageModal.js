import React from 'react';
import styles from '../../Style/MessageModal.module.css';

const MessageModal = ({ type, message, onClose, onOutsideClick }) => {
  // Define CSS classes based on the type
  const modalClassName = `${type === 'success' ? styles.success : styles.error}`;

  return (
    <div className={styles.messageModal} onClick={onOutsideClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.messageText}>{message}</div>
        <button className={`${styles.actionButton} ${modalClassName}`} onClick={onClose}>
          {type === 'success' ? 'OK' : 'Close'}
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
