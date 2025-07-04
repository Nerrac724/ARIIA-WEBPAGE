import React, { useState } from 'react';
import { Download, Award, Calendar, FileText } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface DocumentFile {
  name: string;
  url: string;
}

interface AccreditationItem {
  id: string;
  name: string;
  date: string;
  documents: DocumentFile[];
}

interface AutonomyItem {
  id: string;
  name: string;
  documents: DocumentFile[];
}

interface CategoryData {
  title: string;
  description: string;
  accreditations?: AccreditationItem[];
  autonomyCertificates?: AutonomyItem[];
}

const accreditationsData: Record<string, CategoryData> = {
  'accreditations-autonomy': {
    title: 'Accreditations and Autonomy Certificates',
    description: 'NBA Accreditations and University Autonomy Certificates ensuring quality education standards',
    accreditations: [
      {
        id: 'accreditation-1',
        name: 'NBA Accreditation Certificate',
        date: '4/2/2025',
        documents: [
          { name: 'NBA Certificate 2025.pdf', url: '/assets/NBA_25.pdf' }
        ]
      },
      {
        id: 'accreditation-2',
        name: 'NBA Accreditation Certificate',
        date: '2/12/2021',
        documents: [
          { name: 'NBA Certificate 2021.pdf', url: '/assets/NBA_21.pdf' }
        ]
      },
      {
        id: 'accreditation-3',
        name: 'NBA Accreditation Certificate',
        date: '21/7/2020',
        documents: [
          { name: 'NBA Certificate 2020.pdf', url: '/assets/NBA_20.pdf' }
        ]
      },
      {
        id: 'accreditation-4',
        name: 'NBA Accreditation Certificate',
        date: '09/06/2017',
        documents: [
          { name: 'NBA Certificate 2017.pdf', url: '/assets/NBA_17.pdf' }
        ]
      },
      {
        id: 'accreditation-5',
        name: 'NBA Accreditation Certificate',
        date: '08/11/2013',
        documents: [
          { name: 'NBA Certificate 2013.pdf', url: '/assets/NBA_13.pdf' }
        ]
      }
    ],
    autonomyCertificates: [
      {
        id: 'autonomy-1',
        name: 'University of Mumbai Autonomy Letter',
        documents: [
          { name: 'Mumbai University Autonomy Letter.pdf', url: '/assets/UOM_Autonomy_Letter.pdf' }
        ]
      },
      {
        id: 'autonomy-2',
        name: 'University Grants Commission Autonomy Letter',
        documents: [
          { name: 'UGC Autonomy Letter.pdf', url: '/assets/UGC_Autonomy_Letter.pdf' }
        ]
      }
    ]
  }
};

export const ProgramsPortal: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [ref, isVisible] = useIntersectionObserver();

  const toggleItemExpansion = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const category = accreditationsData['accreditations-autonomy'];

  return (
    <section 
      ref={ref}
      className={`py-16 lg:py-24 bg-white dark:bg-dark-900 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Accreditations and Autonomy Certificates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            NBA Accreditations and University Autonomy Certificates ensuring quality education standards and institutional excellence
          </p>
        </div>

        {/* Content Panel */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
            {/* Panel Header */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-teal p-6">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-primary-100 text-lg">
                {category.description}
              </p>
            </div>

            {/* Panel Content */}
            <div className="p-6">
              {/* NBA Accreditations Section */}
              <div className="mb-12">
                <h4 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary-600" />
                  NBA Accreditations
                </h4>
                <div className="space-y-4">
                  {category.accreditations?.map((accreditation, index) => (
                    <div
                      key={accreditation.id}
                      className={`group border border-gray-200 dark:border-dark-600 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Accreditation Header */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-600 p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="flex-1">
                            <h5 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {accreditation.name}
                            </h5>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">Date: {accreditation.date}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleItemExpansion(accreditation.id)}
                            onKeyDown={(e) => handleKeyDown(e, () => toggleItemExpansion(accreditation.id))}
                            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-700"
                            aria-expanded={expandedItems.has(accreditation.id)}
                            aria-controls={`content-${accreditation.id}`}
                          >
                            <span className="font-medium">View Documents</span>
                            <div className={`w-5 h-5 transition-transform duration-300 ${
                              expandedItems.has(accreditation.id) ? 'rotate-45' : ''
                            }`}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Accreditation Documents */}
                      <div
                        id={`content-${accreditation.id}`}
                        className={`bg-white dark:bg-dark-800 transition-all duration-300 overflow-hidden ${
                          expandedItems.has(accreditation.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-6 border-t border-gray-200 dark:border-dark-600">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {accreditation.documents.map((doc, docIndex) => (
                              <a
                                key={docIndex}
                                href={doc.url}
                                download
                                className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-accent-teal/10 dark:from-dark-600 dark:to-dark-500 rounded-lg hover:from-primary-100 hover:to-accent-teal/20 dark:hover:from-dark-500 dark:hover:to-dark-400 transition-all duration-300 group border border-primary-200 dark:border-dark-500 hover:border-primary-300 dark:hover:border-dark-400 hover:shadow-md"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="p-2 bg-primary-600 text-white rounded-lg group-hover:bg-primary-700 transition-colors duration-300">
                                    <Download className="w-5 h-5" />
                                  </div>
                                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-accent-teal transition-colors duration-300">
                                    {doc.name}
                                  </span>
                                </div>
                                <div className="text-primary-600 dark:text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <Download className="w-4 h-4" />
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Autonomy Certificates Section */}
              <div>
                <h4 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-accent-teal" />
                  Autonomy Certificates
                </h4>
                <div className="space-y-4">
                  {category.autonomyCertificates?.map((certificate, index) => (
                    <div
                      key={certificate.id}
                      className={`group border border-gray-200 dark:border-dark-600 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in`}
                      style={{ animationDelay: `${(category.accreditations?.length || 0) * 100 + index * 100}ms` }}
                    >
                      {/* Certificate Header */}
                      <div className="bg-gradient-to-r from-accent-teal/10 to-accent-teal/20 dark:from-dark-700 dark:to-dark-600 p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="flex-1">
                            <h5 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {certificate.name}
                            </h5>
                          </div>
                          <button
                            onClick={() => toggleItemExpansion(certificate.id)}
                            onKeyDown={(e) => handleKeyDown(e, () => toggleItemExpansion(certificate.id))}
                            className="flex items-center gap-2 px-4 py-2 bg-accent-teal hover:bg-accent-teal/90 text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 dark:focus:ring-offset-dark-700"
                            aria-expanded={expandedItems.has(certificate.id)}
                            aria-controls={`content-${certificate.id}`}
                          >
                            <span className="font-medium">View Documents</span>
                            <div className={`w-5 h-5 transition-transform duration-300 ${
                              expandedItems.has(certificate.id) ? 'rotate-45' : ''
                            }`}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Certificate Documents */}
                      <div
                        id={`content-${certificate.id}`}
                        className={`bg-white dark:bg-dark-800 transition-all duration-300 overflow-hidden ${
                          expandedItems.has(certificate.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-6 border-t border-gray-200 dark:border-dark-600">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {certificate.documents.map((doc, docIndex) => (
                              <a
                                key={docIndex}
                                href={doc.url}
                                download
                                className="flex items-center justify-between p-4 bg-gradient-to-r from-accent-teal/10 to-accent-teal/20 dark:from-dark-600 dark:to-dark-500 rounded-lg hover:from-accent-teal/20 hover:to-accent-teal/30 dark:hover:from-dark-500 dark:hover:to-dark-400 transition-all duration-300 group border border-accent-teal/30 dark:border-dark-500 hover:border-accent-teal/50 dark:hover:border-dark-400 hover:shadow-md"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="p-2 bg-accent-teal text-white rounded-lg group-hover:bg-accent-teal/90 transition-colors duration-300">
                                    <Download className="w-5 h-5" />
                                  </div>
                                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-accent-teal dark:group-hover:text-accent-teal transition-colors duration-300">
                                    {doc.name}
                                  </span>
                                </div>
                                <div className="text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <Download className="w-4 h-4" />
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`mt-12 text-center transition-all duration-700 delay-600 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/assets/NBA_Docs.rar"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-teal text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-teal/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete NBA Documentation
            </a>
            <a
              href="/assets/AutonomyLetters.rar"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-gold to-accent-gold/80 text-dark-900 font-semibold rounded-lg hover:from-accent-gold/90 hover:to-accent-gold/70 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Autonomy Certificates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};