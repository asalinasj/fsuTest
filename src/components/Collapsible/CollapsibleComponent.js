import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './Collapsible.css';

const CollapsibleComponent = () => {
    return(
        <div className="collapse-wrapper">
            <h2>Collapsible Sampler</h2>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click to view interests
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <li>Web development</li>
                            <li>Video editing</li>
                            <li>Swimming</li>
                            <li>Learning new technology</li>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Click to view Schools Attended
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <li>Florida International University</li>
                            <li>Florida State University</li>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default CollapsibleComponent;