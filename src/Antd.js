
import 'antd/dist/antd.css'; 
import './App.css';

import { Layout, Row } from 'antd';
import Vendor from './VendorAntd';

const { Content } = Layout; 

  const style = { background: '#ccc', padding: '40px' };
function Antd() {
  return (
    <Layout>
      <Content style={style}>
        <Row justify="center" gutter={32}>
            <Vendor />
        </Row>
      </Content>
    </Layout>
  );
}

export default Antd;
