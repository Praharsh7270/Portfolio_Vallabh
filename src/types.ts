/**
 * Types for V.S Legal and Associates Web App
 */

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  date?: string;
  category: 'achievement' | 'ceremony' | 'firm' | 'advocacy';
}

export interface CaseInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  caseType: string;
  details: string;
  submittedAt: string;
  status: 'Received' | 'Assessed' | 'Consultation Scheduled';
  aiAssessment?: string;
}
