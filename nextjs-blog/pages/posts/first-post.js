import styled from 'styled-components';

import Head from 'next/head';
import Link from 'next/link';

import StyledLayout from '../../components/layout';

const StyledLink = styled(Link)`
    color: green;
    font-size: 1.5em;
`;

export default function FirstPost() {
    return (
      <StyledLayout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <StyledLink href="/">
            <a>Back to home</a>
          </StyledLink>
        </h2>
      </StyledLayout>
    )
};