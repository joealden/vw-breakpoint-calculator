import React from "react";
import { Helmet } from "react-helmet";
import styled, { injectGlobal } from "styled-components";

import Tool from "./Tool";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`;

const App = () => (
  <Page>
    <Helmet>
      <title>VW Breakpoint Calcuator</title>
    </Helmet>
    <main>
      <Heading>VW Breakpoint Calcuator</Heading>
      <ShortDescription>
        A tool that calculates the <Code>vw</Code> value of an CSS rule for a
        given breakpoint.
      </ShortDescription>
      <Tool />
      <LongDescription>
        <p>
          When creating a responsive webpage, it can a time consuming task to
          ensure that text scales correctly. For example, say you want to have a
          heading have a font size of <Code>30px</Code> at a breakpoint of
          <Code>2560px</Code> and you want the heading to scale responively when
          the viewport is bigger and smaller than the breakpoint defined.
        </p>
        <p>
          To achieve this, we can calculate a relative measurement (<Code>
            vw
          </Code>) that scales with the viewport instead of using an absolute
          measurement like <Code>px</Code>. This <Code>vw</Code> measurement
          needs to be equivalent to 30px at the breakpoint specified. The
          following formula is used to calculate this value:
          <Code>(elementSizeAtBreakpoint / breakpoint) * 100</Code>.
        </p>
        <p>
          In the example given above, putting the values into the formula would
          give the following result: <Code>(30 / 2560) * 100 = 1.17</Code>. This
          means that the value <Code>1.17vw</Code> can be used in place of the{" "}
          <Code>30px</Code> value for the font-size of this heading to make it
          scale with the viewport width.
        </p>
        <p>
          This is a tool to calculate this value so you don&#39;t have to
          remember this formula everytime you need to use it (using pixels).
        </p>
      </LongDescription>
    </main>
  </Page>
);

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    height: auto;
    display: auto;
    margin: 50px 0;
  }

  @media screen and (max-height: 700px) {
    height: auto;
    display: auto;
    margin: 50px 0;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 35px;
  margin: 0 30px;
`;

const Code = styled.span`
  font-family: "Courier New", Courier, monospace;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  padding: 0.05rem 0.3rem;
`;

const ShortDescription = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 25px;
  margin: 8px 30px;

  span {
    font-size: 25px;
  }
`;

const LongDescription = styled.div`
  max-width: 920px;
  margin: 30px 30px 0;

  p {
    line-height: 1.5rem;
    text-align: center;
  }

  p:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default App;