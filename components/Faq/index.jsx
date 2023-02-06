import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFaqAction } from 'store/faq/faq.action';
import {
  StyledDiv,
  StyledText,
  StyledH3,
} from 'components/Common/commonStyles';
import { Input } from 'components/Common/Input';
import Icon from 'components/Icon';
import Empty from 'components/Common/Empty';
import {
  StyledCheckableTag,
  StyledCollapse,
  StyledContainer,
  StyledContent,
  StyledHeader,
  StyledPanel,
} from './style';
import { tags } from 'utils/faq.utils';

const Faq = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.faq);

  const [selectedTags, setSelectedTags] = useState(['General']);

  useEffect(() => {
    dispatch(getFaqAction());
  }, []);

  const handleChange = (tag, checked) =>
    setSelectedTags((prev) =>
      checked ? [...prev, tag] : selectedTags.filter((t) => t !== tag),
    );

  return (
    <StyledDiv pt="234px" pb="72px" px="140px">
      <StyledHeader>
        <StyledH3 fontSize={18} color="gray.15" mb="20px">
          Frequently Asked Questions
        </StyledH3>
        <StyledText
          fontSize={9}
          color="gray.27"
          width="496px"
          textAlign="center"
          mb="32px"
        >
          You may find your answer in the following boxesIf not, Don’t hesitate
          to contact us at any time
        </StyledText>
        <Input
          placeholder="Search your issue here"
          prefix={<Icon name="icon-search" color="orange.13" fontSize={7} />}
          width="675px"
        />
        <StyledDiv mt="44px">
          {tags.map((tag) => (
            <StyledCheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </StyledCheckableTag>
          ))}
        </StyledDiv>
      </StyledHeader>
      <StyledContainer>
        <StyledContent>
          {items.length ? (
            <StyledCollapse expandIconPosition="right" bordered={false}>
              {items?.map(({ id, question, solve }) => (
                <StyledPanel
                  key={id}
                  header={
                    <StyledText color="blue.10" fontSize={11}>
                      {question}
                    </StyledText>
                  }
                >
                  <StyledText color="gray.27" fontSize={9}>
                    {solve}
                  </StyledText>
                </StyledPanel>
              ))}
            </StyledCollapse>
          ) : (
            <Empty />
          )}
        </StyledContent>
      </StyledContainer>
    </StyledDiv>
  );
};

export default Faq;
