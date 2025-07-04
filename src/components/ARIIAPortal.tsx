import React, { useState } from 'react';
import { Download, Award, TrendingUp, Users, Lightbulb, Target, BarChart3, FileText, Calendar, ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface DocumentFile {
  name: string;
  url: string;
}

interface ARIIAItem {
  id: string;
  title: string;
  description: string;
  year?: string;
  ranking?: string;
  score?: string;
  documents: DocumentFile[];
  highlights?: string[];
}

interface CategoryData {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: ARIIAItem[];
}

const ariiaData: Record<string, CategoryData> = {
  'rankings': {
    title: 'ARIIA Rankings & Reports',
    description: 'Official ARIIA ranking reports and performance analysis across different years',
    icon: <Award className="w-6 h-6" />,
    items: [
      {
        id: 'ariia-2024',
        title: 'ARIIA Ranking 2024',
        description: 'Latest ARIIA ranking report showcasing innovation achievements and institutional performance',
        year: '2024',
        ranking: 'Band A (51-100)',
        score: '78.5/100',
        documents: [
          { name: 'ARIIA Report 2024.pdf', url: '/assets/ARIIA_Report_2024.pdf' },
          { name: 'Performance Analysis 2024.pdf', url: '/assets/ARIIA_Analysis_2024.pdf' }
        ],
        highlights: [
          'Improved from Band B to Band A',
          'Scored highest in Innovation Infrastructure',
          'Excellence in Startup Support',
          'Strong Industry Collaboration'
        ]
      },
      {
        id: 'ariia-2023',
        title: 'ARIIA Ranking 2023',
        description: 'Previous year ranking report with comprehensive innovation metrics',
        year: '2023',
        ranking: 'Band B (101-150)',
        score: '72.3/100',
        documents: [
          { name: 'ARIIA Report 2023.pdf', url: '/assets/ARIIA_Report_2023.pdf' },
          { name: 'Innovation Metrics 2023.pdf', url: '/assets/ARIIA_Metrics_2023.pdf' }
        ],
        highlights: [
          'First time ARIIA participation',
          'Strong foundation in innovation',
          'Growing startup ecosystem',
          'Emerging research culture'
        ]
      }
    ]
  },
  'innovation-infrastructure': {
    title: 'Innovation Infrastructure',
    description: 'Comprehensive documentation of innovation facilities, labs, and infrastructure',
    icon: <Lightbulb className="w-6 h-6" />,
    items: [
      {
        id: 'innovation-labs',
        title: 'Innovation Labs & Facilities',
        description: 'State-of-the-art innovation labs, maker spaces, and research facilities',
        documents: [
          { name: 'Innovation Lab Details.pdf', url: '/assets/Innovation_Labs.pdf' },
          { name: 'Facility Infrastructure.pdf', url: '/assets/Facility_Infrastructure.pdf' },
          { name: 'Equipment Inventory.pdf', url: '/assets/Equipment_Inventory.pdf' }
        ],
        highlights: [
          'Advanced Maker Space with 3D Printing',
          'IoT and Embedded Systems Lab',
          'AI/ML Research Facility',
          'Prototype Development Center'
        ]
      },
      {
        id: 'incubation-center',
        title: 'Incubation Center',
        description: 'Dedicated startup incubation facility with mentorship and funding support',
        documents: [
          { name: 'Incubation Center Profile.pdf', url: '/assets/Incubation_Center.pdf' },
          { name: 'Startup Support Services.pdf', url: '/assets/Startup_Support.pdf' }
        ],
        highlights: [
          '5000 sq ft dedicated incubation space',
          'Mentorship from industry experts',
          'Seed funding support',
          'Legal and IP assistance'
        ]
      }
    ]
  },
  'startup-ecosystem': {
    title: 'Startup Ecosystem',
    description: 'Student and faculty startups, entrepreneurship programs, and success stories',
    icon: <TrendingUp className="w-6 h-6" />,
    items: [
      {
        id: 'student-startups',
        title: 'Student Startups',
        description: 'Comprehensive list of student-led startups and their achievements',
        documents: [
          { name: 'Student Startup Directory.pdf', url: '/assets/Student_Startups.pdf' },
          { name: 'Startup Success Stories.pdf', url: '/assets/Startup_Success.pdf' },
          { name: 'Funding Received Report.pdf', url: '/assets/Startup_Funding.pdf' }
        ],
        highlights: [
          '50+ active student startups',
          '₹2Cr+ total funding raised',
          '15 startups with revenue generation',
          '5 startups with international presence'
        ]
      },
      {
        id: 'faculty-startups',
        title: 'Faculty Startups',
        description: 'Faculty-led entrepreneurial ventures and technology transfer initiatives',
        documents: [
          { name: 'Faculty Startup List.pdf', url: '/assets/Faculty_Startups.pdf' },
          { name: 'Technology Transfer.pdf', url: '/assets/Technology_Transfer.pdf' }
        ],
        highlights: [
          '12 faculty-led startups',
          'Technology commercialization',
          'Industry partnerships',
          'Research-to-market initiatives'
        ]
      },
      {
        id: 'entrepreneurship-programs',
        title: 'Entrepreneurship Programs',
        description: 'Structured programs to foster entrepreneurial mindset and skills',
        documents: [
          { name: 'Entrepreneurship Curriculum.pdf', url: '/assets/Entrepreneurship_Curriculum.pdf' },
          { name: 'Workshop Reports.pdf', url: '/assets/Entrepreneurship_Workshops.pdf' },
          { name: 'Mentorship Program.pdf', url: '/assets/Mentorship_Program.pdf' }
        ],
        highlights: [
          'Dedicated entrepreneurship course',
          'Regular startup workshops',
          'Industry mentor network',
          'Pitch competition events'
        ]
      }
    ]
  },
  'innovation-projects': {
    title: 'Innovation Projects',
    description: 'Student and faculty innovation projects, research initiatives, and patent applications',
    icon: <Target className="w-6 h-6" />,
    items: [
      {
        id: 'student-projects',
        title: 'Student Innovation Projects',
        description: 'Innovative projects developed by students across various domains',
        documents: [
          { name: 'Student Project Portfolio.pdf', url: '/assets/Student_Projects.pdf' },
          { name: 'Innovation Competition Winners.pdf', url: '/assets/Innovation_Winners.pdf' },
          { name: 'Project Impact Assessment.pdf', url: '/assets/Project_Impact.pdf' }
        ],
        highlights: [
          '150+ innovation projects annually',
          'Multi-disciplinary collaboration',
          'Real-world problem solving',
          'Industry-sponsored projects'
        ]
      },
      {
        id: 'research-projects',
        title: 'Research & Development',
        description: 'Faculty-led research projects with innovation potential',
        documents: [
          { name: 'Research Project List.pdf', url: '/assets/Research_Projects.pdf' },
          { name: 'Publication Impact.pdf', url: '/assets/Publication_Impact.pdf' },
          { name: 'Research Funding.pdf', url: '/assets/Research_Funding.pdf' }
        ],
        highlights: [
          '75+ active research projects',
          '₹1.5Cr research funding',
          '200+ research publications',
          'International collaborations'
        ]
      },
      {
        id: 'patents-ip',
        title: 'Patents & Intellectual Property',
        description: 'Patent applications, grants, and intellectual property portfolio',
        documents: [
          { name: 'Patent Portfolio.pdf', url: '/assets/Patent_Portfolio.pdf' },
          { name: 'IP Policy Document.pdf', url: '/assets/IP_Policy.pdf' },
          { name: 'Technology Licensing.pdf', url: '/assets/Technology_Licensing.pdf' }
        ],
        highlights: [
          '25+ patent applications filed',
          '8 patents granted',
          'Strong IP protection policy',
          'Technology licensing agreements'
        ]
      }
    ]
  },
  'industry-collaboration': {
    title: 'Industry Collaboration',
    description: 'Partnerships with industry for innovation, internships, and knowledge exchange',
    icon: <Users className="w-6 h-6" />,
    items: [
      {
        id: 'industry-partnerships',
        title: 'Industry Partnerships',
        description: 'Strategic partnerships with leading companies for innovation and research',
        documents: [
          { name: 'Industry Partnership MoUs.pdf', url: '/assets/Industry_MoUs.pdf' },
          { name: 'Collaboration Projects.pdf', url: '/assets/Collaboration_Projects.pdf' },
          { name: 'Joint Research Initiatives.pdf', url: '/assets/Joint_Research.pdf' }
        ],
        highlights: [
          '50+ industry partnerships',
          'Joint research projects',
          'Technology development programs',
          'Innovation challenges'
        ]
      },
      {
        id: 'internship-programs',
        title: 'Innovation Internships',
        description: 'Industry internship programs focused on innovation and research',
        documents: [
          { name: 'Internship Program Details.pdf', url: '/assets/Internship_Programs.pdf' },
          { name: 'Student Placement Data.pdf', url: '/assets/Placement_Data.pdf' }
        ],
        highlights: [
          '90% internship placement',
          'Innovation-focused roles',
          'Industry mentorship',
          'Real project experience'
        ]
      }
    ]
  },
  'performance-metrics': {
    title: 'Performance Metrics',
    description: 'Quantitative analysis of innovation performance and impact assessment',
    icon: <BarChart3 className="w-6 h-6" />,
    items: [
      {
        id: 'innovation-metrics',
        title: 'Innovation Performance Metrics',
        description: 'Comprehensive analysis of innovation KPIs and performance indicators',
        documents: [
          { name: 'Innovation KPI Dashboard.pdf', url: '/assets/Innovation_KPIs.pdf' },
          { name: 'Performance Trends.pdf', url: '/assets/Performance_Trends.pdf' },
          { name: 'Benchmark Analysis.pdf', url: '/assets/Benchmark_Analysis.pdf' }
        ],
        highlights: [
          'Year-over-year growth tracking',
          'Comparative analysis with peers',
          'Innovation impact measurement',
          'ROI on innovation investments'
        ]
      },
      {
        id: 'impact-assessment',
        title: 'Social & Economic Impact',
        description: 'Assessment of innovation impact on society and economy',
        documents: [
          { name: 'Social Impact Report.pdf', url: '/assets/Social_Impact.pdf' },
          { name: 'Economic Contribution.pdf', url: '/assets/Economic_Impact.pdf' }
        ],
        highlights: [
          'Community problem solving',
          'Economic value creation',
          'Employment generation',
          'Technology adoption'
        ]
      }
    ]
  }
};

export const ARIIAPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rankings');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [ref, isVisible] = useIntersectionObserver();

  const tabs = [
    { id: 'rankings', label: 'Rankings & Reports', icon: <Award className="w-4 h-4" /> },
    { id: 'innovation-infrastructure', label: 'Infrastructure', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'startup-ecosystem', label: 'Startup Ecosystem', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'innovation-projects', label: 'Innovation Projects', icon: <Target className="w-4 h-4" /> },
    { id: 'industry-collaboration', label: 'Industry Collaboration', icon: <Users className="w-4 h-4" /> },
    { id: 'performance-metrics', label: 'Performance Metrics', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setExpandedItems(new Set());
  };

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

  return (
    <section 
      id="ariia-portal"
      ref={ref}
      className={`py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-gold/20 to-accent-teal/20 backdrop-blur-md border border-accent-gold/30 rounded-full mb-6">
            <Award className="w-6 h-6 text-accent-gold mr-3" />
            <span className="text-gray-800 dark:text-white font-semibold text-lg">ARIIA Innovation Portal</span>
          </div>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Atal Ranking of Institutions on Innovation Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Comprehensive documentation of SPIT's innovation ecosystem, startup culture, and achievements in fostering entrepreneurship and technological advancement
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`mb-8 transition-all duration-700 delay-400 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          <div 
            className="flex flex-wrap justify-center gap-2 bg-white dark:bg-dark-800 p-3 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700"
            role="tablist"
            aria-label="ARIIA Categories Navigation"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, () => handleTabClick(tab.id))}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-600 to-accent-teal text-white shadow-lg transform scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 hover:shadow-md'
                }`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Panels */}
        <div className={`transition-all duration-700 delay-600 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          {Object.entries(ariiaData).map(([categoryId, category]) => (
            <div
              key={categoryId}
              id={`panel-${categoryId}`}
              className={`${activeTab === categoryId ? 'block' : 'hidden'}`}
              role="tabpanel"
              aria-labelledby={`tab-${categoryId}`}
            >
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
                {/* Panel Header */}
                <div className="bg-gradient-to-r from-primary-600 to-accent-teal p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-primary-100 text-lg">
                    {category.description}
                  </p>
                </div>

                {/* Panel Content */}
                <div className="p-6">
                  <div className="space-y-6">
                    {category.items.map((item, index) => (
                      <div
                        key={item.id}
                        className={`group border border-gray-200 dark:border-dark-600 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Item Header */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-600 p-6">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-4 mb-3">
                                <h5 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">
                                  {item.title}
                                </h5>
                                {item.year && (
                                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                                    {item.year}
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {item.description}
                              </p>
                              
                              {/* Ranking Info */}
                              {(item.ranking || item.score) && (
                                <div className="flex flex-wrap gap-4 mb-4">
                                  {item.ranking && (
                                    <div className="flex items-center gap-2 text-sm">
                                      <Award className="w-4 h-4 text-accent-gold" />
                                      <span className="font-medium text-gray-700 dark:text-gray-300">
                                        Ranking: {item.ranking}
                                      </span>
                                    </div>
                                  )}
                                  {item.score && (
                                    <div className="flex items-center gap-2 text-sm">
                                      <BarChart3 className="w-4 h-4 text-accent-teal" />
                                      <span className="font-medium text-gray-700 dark:text-gray-300">
                                        Score: {item.score}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Highlights */}
                              {item.highlights && (
                                <div className="mb-4">
                                  <h6 className="font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h6>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {item.highlights.map((highlight, idx) => (
                                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                        <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                                        <span>{highlight}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <button
                              onClick={() => toggleItemExpansion(item.id)}
                              onKeyDown={(e) => handleKeyDown(e, () => toggleItemExpansion(item.id))}
                              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-700 whitespace-nowrap"
                              aria-expanded={expandedItems.has(item.id)}
                              aria-controls={`content-${item.id}`}
                            >
                              <FileText className="w-5 h-5" />
                              <span className="font-medium">View Documents</span>
                              <div className={`w-5 h-5 transition-transform duration-300 ${
                                expandedItems.has(item.id) ? 'rotate-45' : ''
                              }`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>

                        {/* Item Documents */}
                        <div
                          id={`content-${item.id}`}
                          className={`bg-white dark:bg-dark-800 transition-all duration-300 overflow-hidden ${
                            expandedItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 border-t border-gray-200 dark:border-dark-600">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {item.documents.map((doc, docIndex) => (
                                <a
                                  key={docIndex}
                                  href={doc.url}
                                  download
                                  className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-accent-teal/10 dark:from-dark-600 dark:to-dark-500 rounded-lg hover:from-primary-100 hover:to-accent-teal/20 dark:hover:from-dark-500 dark:hover:to-dark-400 transition-all duration-300 group border border-primary-200 dark:border-dark-500 hover:border-primary-300 dark:hover:border-dark-400 hover:shadow-md"
                                >
                                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                                    <div className="p-2 bg-primary-600 text-white rounded-lg group-hover:bg-primary-700 transition-colors duration-300 flex-shrink-0">
                                      <Download className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-accent-teal transition-colors duration-300 truncate">
                                      {doc.name}
                                    </span>
                                  </div>
                                  <div className="text-primary-600 dark:text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-2">
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
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`mt-12 text-center transition-all duration-700 delay-800 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/assets/ARIIA_Complete_Portfolio.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-teal text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-teal/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete ARIIA Portfolio
            </a>
            <a
              href="https://www.ariia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-gold to-accent-gold/80 text-dark-900 font-semibold rounded-lg hover:from-accent-gold/90 hover:to-accent-gold/70 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Official ARIIA Portal
            </a>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className={`mt-16 transition-all duration-700 delay-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-primary-600 to-accent-teal rounded-2xl p-8 text-white">
            <h3 className="font-playfair text-2xl font-bold text-center mb-8">Innovation at a Glance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-primary-100">Active Startups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-primary-100">Innovation Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-primary-100">Patents Filed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹2Cr+</div>
                <div className="text-primary-100">Funding Raised</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};