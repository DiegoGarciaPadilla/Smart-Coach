import React from 'react';
import { Link } from 'react-router-dom';

const DocumentList = () => {
  return (
    <div>
      <h1>Test Component</h1>
      <p>This is a test component for routing.</p>
      <Link to="/other-page">Go to Other Page</Link>
    </div>
  );
};

export default DocumentList;
