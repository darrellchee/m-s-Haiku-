export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  suburb: string;
  serviceType: string;
  propertySize: string;
  datePreference: string;
  message?: string;
}

export interface ValidationErrors {
  name?: string;
  phone?: string;
  suburb?: string;
  serviceType?: string;
  propertySize?: string;
  datePreference?: string;
}
