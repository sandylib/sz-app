import React from 'react';
import HelloWorld from 'sz-storybook/HelloWorld/';//alias has been set at the webpack config file

/** Custom message */
export default function ExampleHelloWorld() {
  return <HelloWorld message="from Sandy!" />
}
