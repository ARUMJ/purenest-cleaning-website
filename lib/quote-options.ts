/**
 * PureNest Cleaning Co. — Quote form option lists.
 *
 * Shared between the server-side contact page (which validates the
 * ?service= query param and preselects a service) and the client-side
 * QuoteForm component. Kept in a plain module (no "use client") so it
 * can be imported and used safely from both server and client code.
 */

export const propertyTypeOptions = [
  'House',
  'Apartment',
  'Office',
  'Short-Term Rental',
  'Other',
] as const;

export const serviceOptions = [
  'Residential Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out',
  'Airbnb Cleaning',
  'Commercial Cleaning',
  'Other',
] as const;

export const frequencyOptions = ['One-time', 'Weekly', 'Bi-weekly', 'Monthly'] as const;
