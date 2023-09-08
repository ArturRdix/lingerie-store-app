import React, { useState, useEffect } from 'react';
import styles from './ProductModal.module.css';

export default function ProductModal({ product, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!product) {
      setTimeout(() => {
        setIsOpen(false);
      }, 300); // Задержка перед анимацией закрытия
    } else {
      setIsOpen(true);
    }
  }, [product]);

  return (
    <div className={`${styles.modaleWindow} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.modalContainer}>
      <button className={styles.closeButton} onClick={onClose}>
      ×
      </button>
      {product && (
        <>
          <img className={styles.imgModalProduct} src={`../../product-images/${product.img[0]}`} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <p>Цена: {product.price}₴</p>
        </>
      )}
      </div>
    </div>
  );
}
