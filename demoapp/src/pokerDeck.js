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

export function PokerDeck() {
  // Constants for API endpoint and query parameters
  const API_URL = 'http://localhost:4000/api/cards/generateDeck';
  const theme = 'traditional_1';
  const cardType = 'card_back_blue';

  // Fetch card data using react-query
  const { data: deck, error, isLoading } = useQuery('fetchDeck', () =>
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

  // Handle edge case where deck might be undefined
  if (!deck || !Array.isArray(deck)) {
    console.error('Invalid deck data:', deck);
    return <div>Invalid deck data</div>;
  }

  // Render the deck layers

  return (
    <div className="deck">
      {deck.map((card, cardIndex) => (
        <div className={card.cardType} key={cardIndex}>
          {card.art.layers.map((layer, layerIndex) => (
            <HTMLContent key={layerIndex} id={layer.id} content={layer.content} />
          ))}
          </div>
        
      ))}
    </div>
  );
}
