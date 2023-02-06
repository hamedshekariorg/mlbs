import { useTheme } from '@emotion/react';
import { Tooltip } from 'antd';
import { StyledHorizontal, StyledImg } from 'components/Common/commonStyles';
import { sampleHotelServices } from 'utils/hotel.utils';
const InfoSvg = ({ isSvgPanelExpaned }) => {
  const theme = useTheme();
  return (
    <StyledHorizontal mt="17px" maxWidth="359px" flexWrap="wrap">
      {sampleHotelServices.map(({ id, src, tooltip, altTag }, index) => (
        <Tooltip
          title={tooltip}
          key={id}
          color={theme.colors.gray[22]}
          overlayStyle={{
            fontSize: theme.fontSizes[1],
          }}
        >
          <StyledImg
            src={src}
            alt={altTag}
            mr="12px"
            mb={index < 8 && isSvgPanelExpaned && '8px'}
            display={index > 7 && !isSvgPanelExpaned && 'none'}
          />
        </Tooltip>
      ))}
    </StyledHorizontal>
  );
};

export default InfoSvg;
