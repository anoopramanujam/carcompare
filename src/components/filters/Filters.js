import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import { FiFileText, FiSettings, FiSliders } from 'react-icons/fi';
// import { IconContext } from 'react-icons';
import SpecFilter from './SpecFilter';
import FeatureFilter from './FeatureFilter';
import PrefFilter from './PrefFilter';
import '../../globals/Styles.css';

const TabSpecs = 'Specifications';
const TabFeatures = 'Features';
const TabPrefs = 'Preferences';

function renderTab(tab) {
  const title = tab;
  let icon;
  if (tab === TabSpecs) {
    icon = <FiFileText />;
  } else if (tab === TabFeatures) {
    icon = <FiSettings />;
  } else {
    icon = <FiSliders />;
  }
  return (
  // <IconContext.Provider value={{ color: 'black' }}>
    <Stack direction="horizontal">
      <div className="cc-selector" style={{ fontSize: '1.2em' }}>
        {icon}
        {' '}
        {title}

      </div>

    </Stack>
  // </IconContext.Provider>
  );
}

function Filters() {
  return (
    <Tab.Container defaultActiveKey="specs">
      <Row>
        <Col>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="specs">{renderTab(TabSpecs)}</Nav.Link>
            </Nav.Item>
          </Nav>

        </Col>
        <Col>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="features">{renderTab(TabFeatures)}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="prefs">{renderTab(TabPrefs)}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Tab.Content>
              <Tab.Pane eventKey="specs">
                <SpecFilter />
              </Tab.Pane>
              <Tab.Pane eventKey="features">
                <FeatureFilter />
              </Tab.Pane>
              <Tab.Pane eventKey="prefs">
                <PrefFilter />
              </Tab.Pane>
            </Tab.Content>
          </Container>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Filters;
