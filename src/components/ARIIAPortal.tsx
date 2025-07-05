import React, { useState } from 'react';
import { Download, Award, Calendar, FileText } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface DocumentFile {
  name: string;
  url: string;
}

interface YearData {
  year: string;
  reports: DocumentFile[];
  certificates: DocumentFile[];
}

const yearlyData: YearData[] = [
  {
    year: '2023',
    reports: [
      { name: 'ARIIA Report 2023.pdf', url: '/assets/ARIIA_Report_2023.pdf' }
    ],
    certificates: [
      { name: 'ARIIA Certificate 2023.pdf', url: '/assets/ARIIA_Certificate_2023.pdf' }
    ]
  },
  {
    year: '2022',
    reports: [
      { name: 'ARIIA Report 2022.pdf', url: '/assets/ARIIA_Report_2022.pdf' }
    ],
    certificates: [
      { name: 'ARIIA Certificate 2022.pdf', url: '/assets/ARIIA_Certificate_2022.pdf' }
    ]
  },
  {
    year: '2021',
    reports: [
      { name: 'ARIIA Report 2021.pdf', url: '/assets/ARIIA_Report_2021.pdf' }
    ],
    certificates: [
      { name: 'ARIIA Certificate 2021.pdf', url: '/assets/ARIIA_Certificate_2021.pdf' }
    ]
  },
  {
    year: '2020',
    reports: [
      { name: 'ARIIA Report 2020.pdf', url: '/assets/ARIIA_Report_2020.pdf' }
    ],
    certificates: [
      { name: 'ARIIA Certificate 2020.pdf', url: '/assets/ARIIA_Certificate_2020.pdf' }
    ]
  },
  {
    year: '2019',
    reports: [
      { name: 'ARIIA Report 2019.pdf', url: '/assets/ARIIA_Report_2019.pdf' }
    ],
    certificates: [
      { name: 'ARIIA Certificate 2019.pdf', url: '/assets/ARIIA_Certificate_2019.pdf' }
    ]
  }
];

export const ARIIAPortal: React.FC = () => {
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set());
  const [ref, isVisible] = useIntersectionObserver();

  const toggleYearExpansion = (year: string) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section 
      id="ariia-portal"
      ref={ref}
      className={`py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-gold/20 to-accent-teal/20 backdrop-blur-md border border-accent-gold/30 rounded-full mb-6">
            <Award className="w-6 h-6 text-accent-gold mr-3" />
            <span className="text-gray-800 dark:text-white font-semibold text-lg">ARIIA Innovation Portal</span>
          </div>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates and Reports
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Annual ARIIA certificates and comprehensive reports showcasing our innovation achievements and institutional excellence
          </p>
        </div>

        {/* Main Content Panel */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
            {/* Panel Header */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-teal p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-white/20 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-white">
                  ARIIA Certificates and Reports
                </h3>
              </div>
              <p className="text-primary-100 text-lg">
                Official ARIIA documentation organized by year, including ranking certificates and detailed performance reports
              </p>
            </div>

            {/* Panel Content */}
            <div className="p-6">
              <div className="space-y-4">
                {yearlyData.map((yearData, index) => (
                  <div
                    key={yearData.year}
                    className={`group border border-gray-200 dark:border-dark-600 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Year Header */}
                    <button
                      onClick={() => toggleYearExpansion(yearData.year)}
                      onKeyDown={(e) => handleKeyDown(e, () => toggleYearExpansion(yearData.year))}
                      className="w-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-600 hover:from-gray-100 hover:to-gray-200 dark:hover:from-dark-600 dark:hover:to-dark-500 p-6 flex items-center justify-between transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                      aria-expanded={expandedYears.has(yearData.year)}
                      aria-controls={`content-${yearData.year}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary-600 text-white rounded-lg group-hover:bg-primary-700 transition-colors duration-300">
                          <Calendar className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">
                            Year {yearData.year}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            {yearData.reports.length} Reports • {yearData.certificates.length} Certificates
                          </p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 transition-transform duration-300 ${
                        expandedYears.has(yearData.year) ? 'rotate-45' : ''
                      }`}>
                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </button>

                    {/* Year Content */}
                    <div
                      id={`content-${yearData.year}`}
                      className={`bg-white dark:bg-dark-800 transition-all duration-300 overflow-hidden ${
                        expandedYears.has(yearData.year) ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-6 border-t border-gray-200 dark:border-dark-600">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Reports Section */}
                          <div>
                            <h5 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                              <FileText className="w-5 h-5 mr-2 text-primary-600" />
                              Reports
                            </h5>
                            <div className="space-y-3">
                              {yearData.reports.map((report, reportIndex) => (
                                <a
                                  key={reportIndex}
                                  href={report.url}
                                  download
                                  className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-primary-100/50 dark:from-dark-600 dark:to-dark-500 rounded-lg hover:from-primary-100 hover:to-primary-200/50 dark:hover:from-dark-500 dark:hover:to-dark-400 transition-all duration-300 group border border-primary-200 dark:border-dark-500 hover:border-primary-300 dark:hover:border-dark-400 hover:shadow-md"
                                >
                                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                                    <div className="p-2 bg-primary-600 text-white rounded-lg group-hover:bg-primary-700 transition-colors duration-300 flex-shrink-0">
                                      <Download className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300 truncate">
                                      {report.name}
                                    </span>
                                  </div>
                                  <div className="text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-2">
                                    <Download className="w-4 h-4" />
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* Certificates Section */}
                          <div>
                            <h5 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                              <Award className="w-5 h-5 mr-2 text-accent-gold" />
                              Certificates
                            </h5>
                            <div className="space-y-3">
                              {yearData.certificates.map((certificate, certIndex) => (
                                <a
                                  key={certIndex}
                                  href={certificate.url}
                                  download
                                  className="flex items-center justify-between p-4 bg-gradient-to-r from-accent-gold/10 to-accent-gold/20 dark:from-dark-600 dark:to-dark-500 rounded-lg hover:from-accent-gold/20 hover:to-accent-gold/30 dark:hover:from-dark-500 dark:hover:to-dark-400 transition-all duration-300 group border border-accent-gold/30 dark:border-dark-500 hover:border-accent-gold/50 dark:hover:border-dark-400 hover:shadow-md"
                                >
                                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                                    <div className="p-2 bg-accent-gold text-dark-900 rounded-lg group-hover:bg-accent-gold/90 transition-colors duration-300 flex-shrink-0">
                                      <Download className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-accent-gold dark:group-hover:text-accent-gold transition-colors duration-300 truncate">
                                      {certificate.name}
                                    </span>
                                  </div>
                                  <div className="text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-2">
                                    <Download className="w-4 h-4" />
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
              href="/assets/ARIIA_Complete_Archive.zip"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-teal text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-teal/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download All Documents
            </a>
            <a
              href="/assets/ARIIA_Latest_Report.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-gold to-accent-gold/80 text-dark-900 font-semibold rounded-lg hover:from-accent-gold/90 hover:to-accent-gold/70 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FileText className="w-5 h-5 mr-2" />
              Latest ARIIA Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};