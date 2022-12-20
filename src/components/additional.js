import Alert from 'react-bootstrap/Alert';

const mystyle = {
  backgroundColor: "#FFF8DC",
  padding: "30px",
  margin:"30px",
  color:"#000000"
};

function AdditionalContentExample() {
  return (
    <Alert style={mystyle}>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
      A unit conversion expresses the same property as a different unit of measurement. For instance, time can be expressed in minutes instead of hours, while distance can be converted from miles to kilometers, or feet, or any other measure of length. Often measurements are given in one set of units, such as feet, but are needed in different units, such as chains. 
      </p>
      <hr />
      <p className="mb-0">
      No matter what values and units you need to convert we are here to help you .
      </p>
    </Alert>
  );
}

export default AdditionalContentExample;