import Layout from '../components/layout'
import Greeting from '../components/greeter'
import Button from "../components/button";

export default () => (
  <Layout>
    <h1>Hello World.</h1>
    <Greeting name="pe" />
    <Button label="danger" type="danger" />
    <Button label="warning" type="warning" />
    <Button label="primary" />
  </Layout>
)