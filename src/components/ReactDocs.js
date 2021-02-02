import { useReducer } from 'react';
import Container from '../styles/Container';
import Header from './utilityComponents/Header';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
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
            dispatch({ type: ACTIONS.DECREMENT });
          }}
        >
          -
        </button>
        <br />
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.INCREMENT });
          }}
        >
          +
        </button>
      </Container>
    </>
  );
};

export default ReactDocs;
