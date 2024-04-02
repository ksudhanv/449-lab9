import logo from './logo.svg';
import './App.css';

const books = [
  {id: 1, title: 'One Piece', isFiction: true},
  {id: 1, title: 'Harry Potter', isFiction: true},
  {id: 1, title: 'Algebra for dummies', isFiction: false}
];

function BookShelf(){
  const listBooks = books.map(book =>
    <li
      key={book.id}
      style={{
        color: book.isFiction ? 'blue' : 'green'
      }}>
      {book.title}
      </li>
    );
    return(
      <ul>{listBooks}</ul>
    );
}

function Welcome(){
  return (
    <div>
      <h1 id="text">Welcome to the Bookshelf</h1>
    </div>
    
  );
}

function ComeAgain(){
  return (
    <div>
      <h1 id="text">Please Come Again!</h1>
    </div>
    
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <BookShelf />
        <ComeAgain />
      </header>
    </div>
  );
}

export default App;
