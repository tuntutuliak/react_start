import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const Welcome = () => (
  <div className="modal show" style={{ display: 'block', position: 'initial' }}>
    <Modal.Dialog>
      <Modal.Body>
        <p>
          This is simple application that retrieves photos using Unsplash API.
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" href="https://unsplash.com" target="_blanl">
          Learn more
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);

export default Welcome;
