class Foo1 extends React.Component {
  render() {}

}

Foo1.fetchData = process.env.NODE_ENV !== "production" ? () => {} : {};
Foo1.propTypes = process.env.NODE_ENV !== "production" ? {
  bar1: PropTypes.string
} : {};
export default class Foo2 extends React.Component {
  render() {}

}
Foo2.fetchData = process.env.NODE_ENV !== "production" ? () => {
  console.log('hello');
} : {};
Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  bar2: PropTypes.string
} : {};
