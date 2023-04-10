import { Card } from 'antd';
import react from '../../../assets/img/reactbg.jpg';
import redux from '../../../assets/img/reduxbg.png';
import nodejs from '../../../assets/img/nodejsbg.png';
import echarts from '../../../assets/img/echartsbg.png';
const gridStyle = {
  width: '25%',
  padding:'0px',
  margin:'0px',
  cursor: 'pointer'
};
const imgbg = {
  width:'100%',
  height:'100%',
}
const ArtStack = () => (
  <Card>
    <Card.Grid style={gridStyle}><img style={imgbg} src={react} alt='react'/></Card.Grid>
    <Card.Grid style={gridStyle}><img style={imgbg} src={redux} alt='redux'/></Card.Grid>
    <Card.Grid style={gridStyle}><img style={imgbg} src={nodejs} alt='nodejs'/></Card.Grid>
    <Card.Grid style={gridStyle}><img style={imgbg} src={echarts} alt='echarts'/></Card.Grid>
    <Card.Grid style={gridStyle}>JavaScript</Card.Grid>
    <Card.Grid style={gridStyle}>TypeScript</Card.Grid>
    <Card.Grid style={gridStyle}>React-Router</Card.Grid>
    <Card.Grid style={gridStyle}>Nprogress</Card.Grid>
  </Card>
);
export default ArtStack;