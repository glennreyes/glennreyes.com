import { describe, it, expect } from 'vitest';

import { composePlaceByLocation, composeGoogleMapsUrl } from './place';

describe('place utilities', () => {
  describe('composePlaceByLocation', () => {
    it('formats location for non-US countries', () => {
      const location = {
        city: 'Vienna',
        country: 'Austria',
        state: null,
      };

      expect(composePlaceByLocation(location)).toBe('Vienna, Austria');
    });

    it('formats location for US with state', () => {
      const location = {
        city: 'San Francisco',
        country: 'United States',
        state: 'CA',
      };

      expect(composePlaceByLocation(location)).toBe('San Francisco, CA');
    });

    it('formats location for US without state', () => {
      const location = {
        city: 'New York',
        country: 'United States',
        state: null,
      };

      expect(composePlaceByLocation(location)).toBe('New York, United States');
    });
  });

  describe('composeGoogleMapsUrl', () => {
    it('creates URL with all location details', () => {
      const location = {
        name: 'Apple Park',
        address: '1 Apple Park Way',
        city: 'Cupertino',
        state: 'CA',
        zip: '95014',
        country: 'United States',
      };
      const url = composeGoogleMapsUrl(location);

      expect(url).toBe(
        'https://maps.google.com/?q=Apple%20Park%2C%201%20Apple%20Park%20Way%2C%20Cupertino%2C%20CA%2C%2095014%2C%20United%20States',
      );
    });

    it('creates URL with partial location details', () => {
      const location = {
        name: 'Conference Center',
        address: '',
        city: 'Vienna',
        state: null,
        zip: '',
        country: 'Austria',
      };
      const url = composeGoogleMapsUrl(location);

      expect(url).toBe(
        'https://maps.google.com/?q=Conference%20Center%2C%20Vienna%2C%20Austria',
      );
    });

    it('handles empty location', () => {
      const location = {
        name: '',
        address: '',
        city: '',
        state: null,
        zip: '',
        country: '',
      };
      const url = composeGoogleMapsUrl(location);

      expect(url).toBe('https://maps.google.com/?q=');
    });
  });
});
