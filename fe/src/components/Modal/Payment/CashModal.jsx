import { useState, useEffect } from 'react';
import styles from './CashModal.module.css';

export default function CashModal({
  setShowMode,
  orderPrice,
  postData,
  setPostData,
}) {
  const [totalInput, setTotalInput] = useState(0);

  useEffect(() => {
    setPostData({
      ...postData,
      receivedAmount: totalInput,
      payment: 'CASH',
    });
  }, []);

  const cashLists = [
    { id: 1, value: 100 },
    { id: 2, value: 500 },
    { id: 3, value: 1000 },
    { id: 4, value: 10000 },
  ];

  const handleClickCash = (price) => {
    setTotalInput(totalInput + price);
  };

  const isAffordable = totalInput >= orderPrice;

  return (
    <div className={styles.container}>
      <div className={styles.cashLists}>
        <ul>
          {cashLists.map((cash) => (
            <li key={cash.id}>
              <CashButton
                price={cash.value}
                onClick={() => handleClickCash(cash.value)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.priceLists}>
        <p>주문금액: {orderPrice}원</p>
        <p>투입금액: {totalInput}원</p>
      </div>

      <button
        type="button"
        className={`${styles.paymentButton} ${
          isAffordable ? styles.paymentButtonActive : ''
        }`}
        disabled={!isAffordable}
        onClick={() => setShowMode('recipe')}
      >
        현금결제하기
      </button>
    </div>
  );
}

function CashButton({ price, onClick, disabled }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {price}원
    </button>
  );
}
