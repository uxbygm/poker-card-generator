import React from 'react';
import { useQuery } from 'react-query';

// Utility to safely render HTML content
function HTMLContent({ content }) {
  if (typeof content !== 'string') {
    console.warn('Invalid content passed to HTMLContent:', content);
    return null;
  }
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

function App() {
  // Constants for API endpoint and query parameters
  const API_URL = 'http://localhost:4000/api/cards';
  const theme = 'traditional1';
  const cardType = 'ace_of_hearts';

  // Fetch card data using react-query
  const { data: card, error, isLoading } = useQuery('fetchCard', () =>
    fetch(`${API_URL}?theme=${theme}&cardType=${cardType}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
  );

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error fetching card: {error.message}</div>;
  }

  // Handle edge case where card or card.layers might be undefined
  if (!card || !Array.isArray(card.layers)) {
    console.error('Invalid card data:', card);
    return <div>Invalid card data</div>;
  }

  // Render the card layers
  return (
    <div className="card">
      {card.layers.map((layer) => (
        <HTMLContent key={layer.id} content={layer.content} />
      ))}
    </div>
  );
}

export default App;
