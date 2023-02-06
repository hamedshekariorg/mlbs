import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { StyledIcon } from './style';

const Icon = ({ name, children, loading, disabled, cursor, ...rest }) => {
  return (
    <>
      {loading ? (
        <StyledIcon {...rest}>
          <LoadingOutlined />
        </StyledIcon>
      ) : (
        <StyledIcon
          cursor={cursor}
          disabled={disabled}
          className={name}
          {...rest}
        >
          {children}
        </StyledIcon>
      )}
    </>
  );
};

export default Icon;
