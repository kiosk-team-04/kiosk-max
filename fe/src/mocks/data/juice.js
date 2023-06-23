const juiceDrinks = [
  {
    id: 1,
    type: 'juice',
    name: '오렌지쥬스',
    img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
    price: 4000,
    options: [
      {
        id: 1,
        type: '사이즈',
        value: [
          {
            id: 1,
            detail: 'big',
          },
          {
            id: 2,
            detail: 'medium',
          },
          {
            id: 3,
            detail: 'small',
          },
        ],
      },
      {
        id: 2,
        type: '온도',
        value: [
          {
            id: 1,
            detail: 'cold',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'juice',
    name: '망고쥬스',
    img: 'https://cdn.imweb.me/upload/S2022012027a2ef95d300f/f6224ed0b663d.png',
    price: 5000,
    options: [
      {
        id: 1,
        type: '사이즈',
        value: [
          {
            id: 1,
            detail: 'big',
          },
          {
            id: 2,
            detail: 'medium',
          },
          {
            id: 3,
            detail: 'small',
          },
        ],
      },
      {
        id: 2,
        type: '온도',
        value: [
          {
            id: 1,
            detail: 'cold',
          },
        ],
      },
    ],
  },
];

export default juiceDrinks;
