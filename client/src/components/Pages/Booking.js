import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../CSS/Policy.css";
import daily1 from "../../images/daily1.png"
import daily2 from "../../images/daily2.png"
import daily3 from "../../images/daily3.png"
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
            <Card.Img variant="top" src={daily1} />
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
            <Card.Img variant="top" src={daily2} />
            <Card.Body>
              <Card.Title>Daily Plan</Card.Title>
              <Card.Text>
                Make today plan from 11.00AM to 12.00PM and witness how helpful our pyschologist are.
                You will enjoy a free session from our best pyschologist.
                <p className="card-planning-text">1 Ksh</p>
              </Card.Text>
            </Card.Body>
            <Link to="/Pages/LipaNaMpesa.js">
              <button type="button" className="card-button">
                Book Now
              </button>
            </Link>
          </Card>

          <Card className="card-planning">
            <Card.Img variant="top" src={daily3} />
            <Card.Body>
              <Card.Title>Daily Plan</Card.Title>
              <Card.Text>
              Make today plan from 2.00PM to 4.00PM and witness how helpful our pyschologist are.
                You will enjoy a free session from our best pyschologist.
                <p className="card-planning-text">1 Ksh</p>
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
