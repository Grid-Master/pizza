import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaBlock title="Молдавская" price={228} />
              <PizzaBlock title="Чизбургер-пицца" price="1337" />
              <PizzaBlock title="Четыре сыра" price="500" />
              <PizzaBlock title="XXX" price="9999" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
