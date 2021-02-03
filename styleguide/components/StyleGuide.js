import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputText, Text, FlexRow } from '../../src';

const Content = styled.div`
  position: relative;
  font-family: "Marianne, sans-serif";
  min-height: 100vh;
  max-width: 100vw;
`;

const Sidebar = styled.div`
  position: absolute;
  display: flex-columns;
  justify-content: flex-end;
  background-color: #fbfbfb;
  border-right: 1px solid #F2F2F2;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: scroll;
  min-width: 200px;
`;

const Main = styled.div`
  position: relative;
  max-width: 1200px;
  padding: 64px;
  padding-left: 300px;
  margin: 0;
`;

// other possible props: classes, toc, title, homepageUrl,
export function StyleGuideRenderer({ children, hasSidebar, toc }) {
  return (
    <>
      <Content>
        <Main>
          {children}
        </Main>
        {
          hasSidebar && (
            <Sidebar>
              {toc}
            </Sidebar>
          )
        }
      </Content>
    </>
  );
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  toc: PropTypes.object.isRequired,
  hasSidebar: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default StyleGuideRenderer;
