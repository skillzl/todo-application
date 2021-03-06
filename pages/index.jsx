import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { withRedux, TODO_ADD, TODO_REMOVE, TODO_COMPLETE, TODO_REMOVE_COMPLETED } from '~/store';
import { useTodos } from '~/store/hooks';
import Form from '~/components/TodoForm';
import List from '~/components/TodoList';
import Item from '~/components/TodoItem';

const HomeTodoApp = () => {
  const { items } = useTodos();
  const dispatch = useDispatch();

  const handleAddTodos = e => {
    e.preventDefault();
    const { value } = e.target.todo;
    if (value) {
      dispatch({ type: TODO_ADD, payload: { id: uuidv4(), text: value } });
      e.target.todo.value = '';
    }
  };

  const handleRemoveItem = id => e => {
    e.preventDefault();
    dispatch({ type: TODO_REMOVE, payload: { id } });
  };

  const handleCompleteItem = id => e => {
    e.preventDefault();
    dispatch({ type: TODO_COMPLETE, payload: { id } });
  };

  const handlerRemoveCompleted = e => {
    e.preventDefault();
    dispatch({ type: TODO_REMOVE_COMPLETED });
  };

  return (
    <>
      <Head>
        <title>skillzl/web-application</title>
      </Head>
      <div className="container">
        <List title="Task List" handlerRemoveCompleted={handlerRemoveCompleted}>
          <Form handleSubmit={handleAddTodos} />
          {items.map(item => (
            <Item
              key={item.id}
              item={item}
              handleComplete={handleCompleteItem}
              handleRemove={handleRemoveItem}
            />
          ))}
        </List>
      </div>
    </>
  );
};

HomeTodoApp.getInitialProps = ({ reduxStore }) => {
  const firstItemId = uuidv4();
  const items = [
    { id: firstItemId, text: 'visit skillzl.me' },
    { id: uuidv4(), text: 'use this webapp' },
  ];

  items.map(payload => reduxStore.dispatch({ type: TODO_ADD, payload }));

  reduxStore.dispatch({ type: TODO_COMPLETE, payload: { id: firstItemId } });

  return {};
};

export default withRedux(HomeTodoApp);
