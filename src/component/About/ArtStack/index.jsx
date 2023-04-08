import { Card } from 'antd';
const gridStyle = {
  width: '25%',
//   height:'100px',
  textAlign: 'center',
};
const ArtStack = () => (
  <Card>
    <Card.Grid style={gridStyle}>React</Card.Grid>
    <Card.Grid style={gridStyle}>Redux</Card.Grid>
    <Card.Grid style={gridStyle}>Nodejs</Card.Grid>
    <Card.Grid style={gridStyle}>ECarts</Card.Grid>
    <Card.Grid style={gridStyle}>JavaScript</Card.Grid>
    <Card.Grid style={gridStyle}>TypeScript</Card.Grid>
    <Card.Grid style={gridStyle}>React-Router</Card.Grid>
    <Card.Grid style={gridStyle}>Nprogress</Card.Grid>
  </Card>
);
export default ArtStack;