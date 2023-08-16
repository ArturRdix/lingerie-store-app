import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsProduct from "./components/ItemsProduct";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Голубой комлпект белья',
      img: 'blueWhite_set_lingerie.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '1200'
    },
    {
      id: 2,
      title: 'Персиковый комлпект белья',
      img: 'peach_set1.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '980'
    },
    {
      id: 3,
      title: 'Розовые трусы(на регуляторах)',
      img: 'pink_underpants.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '550'
    },
    {
      id: 4,
      title: 'Крсаный комплект белья',
      img: 'red_set_lingerie.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '1050'
    },
    {
      id: 5,
      title: 'Лифчики',
      img: 'redBlack-brssiere.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '340'
    },
    {
      id: 6,
      title: 'Белый комплект белья',
      img: 'white_set_lingerie1.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '1140'
    },
  ])
  return (
    <div className="wrapper">
      <Header />
      <ItemsProduct items={items}/>
      <Footer />
    </div>
  );
}

export default App;
