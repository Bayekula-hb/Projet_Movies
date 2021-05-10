import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: "0 2%",
    margin: 0,
    display: 'flex',
    justifyContent:"space-between"
  },
});

export default function UsePagination() {
  const classes = useStyles();
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav className="nav--pagination ">
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }, { color: selected ? '#fff' : undefined }} {...item}>
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }
          return <li className="link--pagination" key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}