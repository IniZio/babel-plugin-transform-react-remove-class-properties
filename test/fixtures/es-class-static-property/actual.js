class Foo1 extends React.Component {
  static propTypes = {
    bar1: PropTypes.string,
  };

  static fetchData = () => {};

  render() {}
}

export default class Foo2 extends React.Component {
  static propTypes = {
    bar2: PropTypes.string,
  };

  static fetchData = () => {
    console.log('hello');
  };

  render() {}
}
