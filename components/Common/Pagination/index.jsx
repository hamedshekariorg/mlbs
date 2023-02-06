import Icon from 'components/Icon';
import React from 'react';
import { StyledPagination } from './style';

const Pagination = ({ ...rest }) => {
  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <Icon name="icon-arrow-left" />;
    }
    if (type === 'next') {
      return <Icon name="icon-arrow-right" />;
    }

    return originalElement;
  };
  return (
    <StyledPagination {...rest} itemRender={itemRender} hideOnSinglePage />
  );
};

export default Pagination;
