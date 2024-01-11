import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import "../styles/Help.css";

function Help() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="help-container">
      <div>
        <button className="help-button" onClick={toggleAccordion}>
          Open
        </button>
      </div>
      {isAccordionOpen && (
        <div className="help-accordion">
          <Card className="help-accordion-card">
            <Card.Body>
              <Accordion defaultActiveKey="0">
                Hello!
                <br />
                <button className="help-button" onClick={toggleAccordion}>
                  Close
                </button>
              </Accordion>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Help;
