import { useEffect, useState } from 'react';
import {
  StyledH3,
  StyledH4,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import { experiences } from 'utils/tourPackage.utils';
import ExperienceCard from './Card';
import Icon from 'components/Icon';
const Experiences = () => {
  const pages = Math.ceil(experiences.length / 3);

  const [currentPage, setCurrentPage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [finishIndex, setFinishIndex] = useState(2);
  const [activeReviews, setActiveReviews] = useState([]);

  useEffect(() => {
    setActiveReviews([]);
    experiences.map(({ description, profile, fullName }, index) => {
      if (index >= startIndex && index <= finishIndex) {
        setActiveReviews((prevState) => [
          ...prevState,
          {
            key: fullName,
            description: description,
            profile: profile,
            fullName: fullName,
          },
        ]);
      }
    });
  }, [startIndex, finishIndex]);

  const handleNext = () => {
    if (currentPage !== pages - 1) {
      setStartIndex((prevState) => prevState + 3);
      setFinishIndex((prevState) => prevState + 3);
      setCurrentPage((prevState) => prevState !== pages && ++prevState);
    }
  };

  const handlePrev = () => {
    if (currentPage !== 0) {
      setStartIndex((prevState) => prevState - 3);
      setFinishIndex((prevState) => prevState - 3);
      setCurrentPage((prevState) => prevState !== 0 && --prevState);
    }
  };
  return (
    <StyledVertical alignItems="center">
      <StyledH3 mt="72px">Experinces</StyledH3>
      <StyledH4 color="gray.27">Our clients describe us the best</StyledH4>
      <StyledHorizontal mt="40px" width="auto" justifyContent="space-between">
        {activeReviews.map(({ key, description, profile, fullName }) => (
          <ExperienceCard
            key={key}
            description={description}
            profile={profile}
            fullName={fullName}
          />
        ))}
      </StyledHorizontal>
      <StyledHorizontal mt="49px">
        <StyledHorizontal
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          width="39px"
          height="39px"
          mr="42px"
          bg="gray.39"
        >
          <Icon name="icon-arrow-left" fontSize={10} onClick={handlePrev} />
        </StyledHorizontal>
        {[...Array(pages).keys()].map((key) => (
          <StyledHorizontal
            justifyContent="center"
            alignItems="center"
            borderRadius="full"
            width="39px"
            height="39px"
            color={key === currentPage ? '#fff' : 'blue.14'}
            mr={key === currentPage - 1 ? '42px' : '36px'}
            bg={key === currentPage && 'blue.14'}
          >
            {key + 1}
          </StyledHorizontal>
        ))}
        <StyledHorizontal
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          width="39px"
          height="39px"
          mr="42px"
          bg="gray.39"
        >
          <Icon name="icon-arrow-right" fontSize={10} onClick={handleNext} />
        </StyledHorizontal>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default Experiences;
