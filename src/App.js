import Customer from './components/Customer';
import React from 'react';
import './App.css';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: '961222',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '홍제니',
    birthday: '961222',
    gender: '여자',
    job: '의사'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '김진환',
    birthday: '970212',
    gender: '남자',
    job: '가수'
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        {
          customers.map(customer => {
            return (
              <Customer 
                key={customer.id}
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
