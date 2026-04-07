import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to My Website</h1>
      <p>This is the home page of our React Router project.</p>

      <h3>What you can do:</h3>
      <ul style={{ listStyle: 'none' }}>
        <li> Visit About page to know more</li>
        <li> Go to Contact page to reach us</li>
      </ul>
    </div>
  );
}
export default Home;
