// TO 아티 메뉴(이미지 + 이름 + 가격)는 따로 컴포넌트화 시켜서 쓰면 좋을듯
// 상세정보는 어떻게 처리할건지?
// 상세정보에 따라 금액이 변할거고, 그럼 백엔드한테도 상세정보까지 보내줘야하나??
// 옵션들의 default값을 설정해야하나? 수량도 0으로 하는게 좋을까?
// 옵션을 선택해야만 담기 버튼이 활성화 되게 할까?

import React from 'react';
import styles from './Menu.module.css';

export default function MenuModal({ handleCloseModal }) {
  return (
    <div className={styles.wrapper}>
      <Close handleCloseModal={handleCloseModal} />
      <div className={styles.container}>
        <div className={styles.info}>
          <Menu />
          <Options />
        </div>
        <Add />
      </div>
    </div>
  );
}

function Close({ handleCloseModal }) {
  return (
    <button className={styles.close} type="button" onClick={handleCloseModal}>
      X
    </button>
  );
}

function Menu() {
  return (
    <div className={styles.menu}>
      <img
        src="https://private-user-images.githubusercontent.com/101464713/247221166-5497bd59-6c56-49ee-ab91-c5b3223a880c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg3Mjg1NDIwLCJuYmYiOjE2ODcyODUxMjAsInBhdGgiOiIvMTAxNDY0NzEzLzI0NzIyMTE2Ni01NDk3YmQ1OS02YzU2LTQ5ZWUtYWI5MS1jNWIzMjIzYTg4MGMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDYyMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA2MjBUMTgxODQwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NDU2OGM2MzZjNTcyNjJmNGM0ZGQwZjc1N2U2NTczZDcwNjY5ODc0MWNiNjE3YzhlOWU1NmQyNTA2Y2Y2ZjhjYyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.61A0AoduU_7MdQtBTWsT8C5E5HLKCTkG8OkkUh47l-M"
        alt=""
      />
      <span className={styles.name}>아메리카노</span>
      <span className={styles.price}>4000</span>
    </div>
  );
}

function Options() {
  return (
    <div className={styles.options}>
      <Size />
      <Temperature />
      <Count />
    </div>
  );
}

function Size() {
  return (
    <div className={styles.size}>
      <button type="button">큰거</button>
      <button type="button">작은거</button>
    </div>
  );
}

function Temperature() {
  return (
    <div className={styles.temperature}>
      <button type="button">뜨거운 것</button>
      <button type="button">차가운 것</button>
    </div>
  );
}

function Count() {
  return (
    <div className={styles.count}>
      <button type="button">-</button>
      <div>1</div>
      <button type="button">+</button>
    </div>
  );
}

function Add() {
  return (
    <button className={styles.add} type="button">
      담기
    </button>
  );
}
