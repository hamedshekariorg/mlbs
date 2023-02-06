import { DownOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { StyledCollapseBlock } from './style';
import Itinerary from './Itinerary';
import WonderfulMoments from './WonderfulMoments';
import ItineraryOverview from './ItineraryOverview';
import Attractions from './Attractions';
import Hotels from './Hotels';
import Notice from './Notice';
import TravelMap from './TravelMap';
import TravelReviews from './TravelReviews';
import ReviewDescription from './ReviewDescription';

const { Panel } = Collapse;

const TourPackageDetail = ({ tour }) => {
  const { description, overviews, notice, medias, map } = tour;
  //  TODO: name of tour
  const panelItems = [
    {
      header: 'Itinerary',
      key: '1',
      component: <Itinerary description={description} />,
    },
    {
      header: 'WonderfulMoments',
      key: '2',
      component: <WonderfulMoments medias={medias} />,
    },
    {
      header: 'ItineraryOverview',
      key: '3',
      component: <ItineraryOverview overviews={overviews} />,
    },
    { header: 'Attractions', key: '4', component: <Attractions /> },
    { header: 'Hotels', key: '5', component: <Hotels /> },
    { header: 'Notice', key: '6', component: <Notice notice={notice} /> },
    { header: 'TravelMap', key: '7', component: <TravelMap map={map} /> },
    { header: 'TravelReviews', key: '8', component: <TravelReviews /> },
  ];

  return (
    <StyledCollapseBlock>
      <Collapse
        bordered={false}
        defaultActiveKey={['2']}
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? 180 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        {panelItems.map(({ header, key, component }) => (
          <Panel
            id={header}
            header={header}
            key={key}
            className="site-collapse-custom-panel"
          >
            {component}
          </Panel>
        ))}
      </Collapse>
      <ReviewDescription />
    </StyledCollapseBlock>
  );
};

export default TourPackageDetail;
