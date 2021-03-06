import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Tool from "./Tool";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  /* Overflow was causing issues for whatever reason... */
  html {
    overflow-x: hidden;
  }
`;

const App = () => (
  <>
    <Page />
    <GlobalStyles />
  </>
);

export default App;

const Page = () => (
  <PageWrapper>
    <main>
      <Heading>
        <Code>px</Code>-to-<Code>vw</Code>
      </Heading>
      <ShortDescription>
        A tool that calculates the <Code>vw</Code> value from a <Code>px</Code>{" "}
        value for a given breakpoint to make the measurement responsive.
      </ShortDescription>
      <Tool />
      <LongDescription>
        <p>
          When creating a responsive webpage, it can be a time consuming task to
          ensure that text scales correctly. For example, say you want to have a
          heading with a font size of <Code>50px</Code> at a breakpoint of
          <Code>2000px</Code> and you want the heading to scale responsively
          when the viewport size is different (smaller or larger) than the
          breakpoint defined.
        </p>
        <p>
          To achieve this, we can calculate a measurement using the{" "}
          <Code>vw</Code> unit that scales with the viewport instead of using an
          absolute unit like <Code>px</Code>. This <Code>vw</Code> measurement
          needs to be equivalent to the <Code>px</Code> measurement at the
          breakpoint specified. The following formula is used to calculate this
          value:
          <Code>(absoluteSize / breakpoint) * 100</Code>.
        </p>
        <p>
          In the example scenario above, substituting the values into the
          formula would give the following result:{" "}
          <Code>(50) / 2000) * 100 = 2.5</Code>. This means that the value{" "}
          <Code>2.5vw</Code> can be used in place of the <Code>50px</Code> value
          for the font-size of the heading to make it scale with the viewport
          width.
        </p>
        <p>
          This is a tool to calculate this value so you don&#39;t have to
          remember this formula everytime you need to use it.
        </p>
      </LongDescription>
    </main>
  </PageWrapper>
);

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 815px) {
    height: auto;
    display: auto;
    margin: 50px 0;
  }

  @media screen and (max-height: 800px) {
    height: auto;
    display: auto;
    margin: 50px 0;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 35px;
  margin: 0 30px 15px;

  span {
    font-size: 35px;
  }
`;

export const Code = styled.span`
  font-family: "Courier New", Courier, monospace;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  padding: 0.05rem 0.3rem;
`;

const ShortDescription = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 25px;
  margin: 8px auto;
  max-width: 800px;

  span {
    font-size: 25px;
  }

  @media screen and (max-width: 850px) {
    margin: 8px 30px;
  }
`;

const LongDescription = styled.div`
  max-width: 980px;
  margin: 30px 30px 0;

  p {
    line-height: 1.5rem;
    text-align: center;
  }

  p:not(:last-child) {
    margin-bottom: 15px;
  }
`;
