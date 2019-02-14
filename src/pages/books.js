import React, { useCallback } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import styled from '@emotion/styled';
import { range } from 'lodash';
import { getBooks } from '../redux/reducers/books';
import Loading from '../components/Loading';
import Layout from '../layout';
import { rhythm } from '../layout/typography';

export default function Books() {
  const booksLength = useMappedState(
    useCallback(
      state => state.books.length,
      [],
    ),
  );
  const dispatch = useDispatch();


  if (booksLength === 0) {
    dispatch(getBooks());

    return <Loading />;
  }

  return (
    <Layout>
    { range(booksLength).map(index => (
      <Book key={index} index={index} />
    ))}
    </Layout>
  )
}

const BookWrapper = styled.div`
  display: flex;
  align-items: center;

  margin: ${rhythm(1)} 0;

  aside {
    flex: 1;
  }
  section {
    flex: 3;

    h1 {
      margin-top: 0;
    }
  }
`;

function Book({ index }) {
  const book = useMappedState(
    useCallback(
      state => state.books[index],
      [index],
    ),
  );

  return (
    <BookWrapper>
      <aside>
        <img src={book.picture} alt="book-img" />
      </aside>
      <section>
        <h1>{ book.name }</h1>
        <p>{ book.description }</p>
      </section>
    </BookWrapper>
  );
}
