import React, { useEffect, useMemo, useState } from 'react';
import { StyledDiv, StyledH3 } from 'components/Common/commonStyles';
import { Form, Switch } from 'antd';
import { StyledFormItem } from './style';

const SwitchGroup = ({ options, onChange, checked, title }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const defaultChecked = useMemo(
    () => options.map(({ value }) => value),
    [options],
  );

  useEffect(() => {
    !checked && selectedOptions.length && setSelectedOptions([]);
  }, [checked]);

  useEffect(() => {
    defaultChecked && setSelectedOptions(defaultChecked);
  }, [defaultChecked]);

  const handleChange = (status, value) => {
    if (status) setSelectedOptions((prev) => [...prev, value]);
    else {
      const info = selectedOptions.filter((item) => item !== value);
      setSelectedOptions(info);
    }
  };

  useEffect(() => {
    selectedOptions && onChange(selectedOptions);
  }, [selectedOptions]);

  const handleChecked = (id) => selectedOptions?.includes(id);

  return (
    <StyledDiv px="10px">
      {title && (
        <StyledH3 mt="28px" mb="25px" fontSize={4} color="gray.15">
          {title}
        </StyledH3>
      )}
      <Form
        labelAlign="left"
        colon={false}
        labelCol={{ span: 18 }}
        wrapperCol={{ span: 6 }}
        layout="horizontal"
      >
        {options?.map(({ value, label }) => (
          <StyledFormItem key={value} label={label} valuePropName="checked">
            <Switch
              checked={handleChecked(value)}
              onChange={(status) => handleChange(status, value)}
            />
          </StyledFormItem>
        ))}
      </Form>
    </StyledDiv>
  );
};
export default React.memo(SwitchGroup);
