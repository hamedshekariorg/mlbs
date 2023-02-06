import { StyledDivider, StyledVertical } from 'components/Common/commonStyles';
import { StyledContainer, StyledResetButton, StyledWrapper } from './style';
import { switchTourGide } from 'utils/tourGuide.utils';
import Section from './Section';
import SectionContent from './SectionContent';
import { StyledSwitch } from 'components/Common/commonStyles';

export default function TourGuideFilter() {
  return (
    <StyledContainer>
      <StyledVertical alignItems="center">
        <StyledResetButton underline>Reset Filters</StyledResetButton>
        <StyledWrapper>
          {switchTourGide &&
            switchTourGide.map((type) => (
              <Section title={type.title} key={type.title}>
                {type.items.map(({ checked, handleChange, title }) => (
                  <SectionContent
                    key={title}
                    component={
                      <StyledSwitch
                        onChange={handleChange}
                        checked={checked}
                        bg={checked ? 'blue.10' : 'gray.6'}
                      />
                    }
                    title={title}
                  />
                ))}
                {type?.showDevider && (
                  <StyledDivider
                    backgroundColor="gray.22"
                    opacity="0.5"
                    margin="1.5rem 0px"
                    m="0"
                  />
                )}
              </Section>
            ))}
        </StyledWrapper>
      </StyledVertical>
    </StyledContainer>
  );
}
