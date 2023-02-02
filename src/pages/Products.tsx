import { Col, Row } from 'react-bootstrap';
import mockData from '../data/products.json';
import { ProductItem } from '../components/ProductItem';

export function Products() {
  return (
    <>
      <h1>Products page</h1>
      <Row md={2} xd={1} lg={3} className="g-3">
        {mockData.map(item => (
          <Col key={item.id}>
            <ProductItem {...item}/>
          </Col>
        ))}
      </Row>
    </>
  );
}
