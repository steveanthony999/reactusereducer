import { useReducer } from 'react';
import Container from '../styles/Container';
import Header from './utilityComponents/Header';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const ReactDocs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header title='React Docs' linkTo='/' linkName='Home' />
      <br />
      <br />
      <hr />
      <Container>
        <h2>Count: {state.count}</h2>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          -
        </button>
        <br />
        <button
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          +
        </button>
      </Container>
    </>
  );
};

export default ReactDocs;
