import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../CSS/Policy.css";
import home from "../../images/home.jpeg";
import { Link } from "react-router-dom";

function GroupExample() {
  return (
    <>
      <div>
        <h1 className="plan-title">Book your therapist now!</h1>
        <p className="plan-list">
          Get your therapist in advance. With just a click of a button, You can
          book a slot to your fovourite therapist
        </p>
      </div>
      <div className="card-plan">
        <CardGroup>
          <Card className="card-planning">
            <Card.Img variant="top" src={home} />
            <Card.Body>
              <Card.Title>Daily Plan</Card.Title>
              <Card.Text>
                Make a daily plan and witness how helpful our pyschologist are.
                You will enjoy a daily free session from our best pyschologist.
                <p className="card-planning-text">1 Ksh</p>
              </Card.Text>
            </Card.Body>

            <Link to="/Pages/LipaNaMpesa.js">
              <button type="button" className="card-button">
                Book Now
              </button>
            </Link>
          </Card>

          {/* card2 */}
          <Card className="card-planning">
            <Card.Img variant="top" src={home} />
            <Card.Body>
              <Card.Title>Weekly Plan</Card.Title>
              <Card.Text>
                Make a weekly plan and witness how helpful our pyschologist are.
                You will enjoy a weekly free session from our best pyschologist.
                <p className="card-planning-text">2 Ksh</p>
              </Card.Text>
            </Card.Body>
            <Link to="/Pages/LipaNaMpesa.js">
              <button type="button" className="card-button">
                Book Now
              </button>
            </Link>
          </Card>

          <Card className="card-planning">
            <Card.Img variant="top" src={home} />
            <Card.Body>
              <Card.Title>Monthly Plan</Card.Title>
              <Card.Text>
                Make a Monthly plan and witness how helpful our pyschologist
                are. You will enjoy a monthly free session from our best
                pyschologist.
                <p className="card-planning-text">4 Ksh</p>
              </Card.Text>
            </Card.Body>
            <Link to="/Pages/LipaNaMpesa.js">
              <button type="button" className="card-button">
                Book Now
              </button>
            </Link>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default GroupExample;
