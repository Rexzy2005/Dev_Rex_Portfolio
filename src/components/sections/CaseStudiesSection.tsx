// import React, { useState } from 'react';
// import { ExternalLink, Clock, User, Target, ArrowRight } from 'lucide-react';
// import { Button } from '../ui/button';
// import { Badge } from '../ui/badge';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
// import { useStaggeredReveal } from '../hooks/useScrollReveal';
// import { ImageWithFallback } from '../figma/ImageWithFallback';

// interface CaseStudy {
//   id: number;
//   title: string;
//   client: string;
//   duration: string;
//   role: string;
//   problem: string;
//   solution: string;
//   results: string[];
//   image: string;
//   tags: string[];
// }

// export const CaseStudiesSection: React.FC = () => {
//   const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  
//   const caseStudies: CaseStudy[] = [
//     {
//       id: 1,
//       title: 'E-commerce Platform Redesign',
//       client: 'TechMart',
//       duration: '3 months',
//       role: 'Lead Frontend Developer',
//       problem: 'The existing e-commerce platform had poor user experience, slow loading times, and low conversion rates. Customers were abandoning carts at a 70% rate.',
//       solution: 'Redesigned the entire frontend using React and Next.js, implemented performance optimizations, created a new design system, and improved the checkout flow.',
//       results: [
//         '45% increase in conversion rate',
//         '60% faster page load times',
//         '30% reduction in cart abandonment',
//         '25% increase in mobile sales'
//       ],
//       image: '/api/placeholder/600/400',
//       tags: ['React', 'Next.js', 'TypeScript', 'E-commerce', 'UX']
//     },
//     {
//       id: 2,
//       title: 'Banking Dashboard Optimization',
//       client: 'FinanceFlow',
//       duration: '4 months',
//       role: 'Senior Frontend Engineer',
//       problem: 'Complex banking dashboard was difficult to navigate, had accessibility issues, and poor mobile experience affecting customer satisfaction.',
//       solution: 'Built a responsive, accessible dashboard with improved data visualization, simplified navigation, and progressive web app capabilities.',
//       results: [
//         '80% improvement in accessibility score',
//         '50% faster task completion',
//         '40% increase in mobile usage',
//         '90% customer satisfaction rating'
//       ],
//       image: '/api/placeholder/600/400',
//       tags: ['Vue.js', 'PWA', 'Accessibility', 'Data Viz', 'Finance']
//     },
//     {
//       id: 3,
//       title: 'SaaS Product Onboarding',
//       client: 'ProductivityPro',
//       duration: '2 months',
//       role: 'Frontend Consultant',
//       problem: 'High user drop-off during onboarding process (85%) and complex initial setup preventing user activation and retention.',
//       solution: 'Designed and developed an interactive onboarding flow with progressive disclosure, guided tours, and contextual help.',
//       results: [
//         '70% reduction in drop-off rate',
//         '3x faster time to first value',
//         '55% increase in feature adoption',
//         '40% improvement in user retention'
//       ],
//       image: '/api/placeholder/600/400',
//       tags: ['React', 'Onboarding', 'UX', 'SaaS', 'Animation']
//     }
//   ];

//   const [ref, visibleItems] = useStaggeredReveal(caseStudies.length, 200);

//   return (
//     <section
//       id="case-studies"
//       ref={ref}
//       className="py-24"
//       style={{ background: 'var(--color-bg)' }}
//     >
//       <div className="max-w-7xl mx-auto px-6 sm:px-8">
//         {/* Section Header */}
//         <div className="text-center space-y-4 mb-16">
//           <div className="inline-flex items-center px-4 py-2">
//             <span className="text-3xl font-medium text-[var(--color-accent)]">Case Studies</span>
//           </div>
          
//           <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">
//             Success Stories
//           </h2>
          
//           <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
//             Detailed insights into how I've helped businesses solve complex problems 
//             and achieve measurable results through thoughtful design and development.
//           </p>
//         </div>

//         {/* Case Studies Grid */}
//         <div className="space-y-8">
//           {caseStudies.map((caseStudy, index) => (
//             <div
//               key={caseStudy.id}
//               className={`glass rounded-3xl overflow-hidden hover:scale-[1.01] transition-all duration-500 ${
//                 visibleItems.has(index) ? 'animate-fade-in-up' : 'opacity-0'
//               }`}
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <div className="grid lg:grid-cols-2 gap-0">
//                 {/* Image */}
//                 <div className="relative h-80 lg:h-auto overflow-hidden">
//                   <ImageWithFallback
//                     src={caseStudy.image}
//                     alt={caseStudy.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-8 space-y-6">
//                   {/* Meta Info */}
//                   <div className="flex flex-wrap gap-4 text-sm">
//                     <div className="flex items-center space-x-2">
//                       <User className="w-4 h-4 text-[var(--color-accent)]" />
//                       <span className="text-[var(--color-text-secondary)]">{caseStudy.client}</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Clock className="w-4 h-4 text-[var(--color-accent)]" />
//                       <span className="text-[var(--color-text-secondary)]">{caseStudy.duration}</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Target className="w-4 h-4 text-[var(--color-accent)]" />
//                       <span className="text-[var(--color-text-secondary)]">{caseStudy.role}</span>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
//                     {caseStudy.title}
//                   </h3>

//                   {/* Problem Preview */}
//                   <p className="text-[var(--color-text-secondary)] leading-relaxed">
//                     {caseStudy.problem.substring(0, 150)}...
//                   </p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {caseStudy.tags.map((tag) => (
//                       <Badge
//                         key={tag}
//                         variant="secondary"
//                         className="glass-subtle border-[var(--color-glass-border)] text-xs"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>

//                   {/* CTA */}
//                   <Button
//                     onClick={() => setSelectedCase(caseStudy)}
//                     className="group bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-alt)] hover:opacity-90 transition-opacity"
//                   >
//                     View Case Study
//                     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Case Study Modal */}
//         <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
//           <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass border-[var(--color-glass-border)]">
//             {selectedCase && (
//               <>
//                 <DialogHeader>
//                   <DialogTitle className="text-2xl font-bold text-[var(--color-text-primary)]">
//                     {selectedCase.title}
//                   </DialogTitle>
//                 </DialogHeader>
                
//                 <div className="space-y-8">
//                   {/* Case Image */}
//                   <div className="rounded-xl overflow-hidden">
//                     <ImageWithFallback
//                       src={selectedCase.image}
//                       alt={selectedCase.title}
//                       className="w-full h-64 object-cover"
//                     />
//                   </div>

//                   {/* Case Details */}
//                   <div className="grid md:grid-cols-3 gap-6">
//                     <div className="space-y-2">
//                       <h4 className="font-semibold text-[var(--color-text-primary)]">Client</h4>
//                       <p className="text-[var(--color-text-secondary)]">{selectedCase.client}</p>
//                     </div>
//                     <div className="space-y-2">
//                       <h4 className="font-semibold text-[var(--color-text-primary)]">Duration</h4>
//                       <p className="text-[var(--color-text-secondary)]">{selectedCase.duration}</p>
//                     </div>
//                     <div className="space-y-2">
//                       <h4 className="font-semibold text-[var(--color-text-primary)]">My Role</h4>
//                       <p className="text-[var(--color-text-secondary)]">{selectedCase.role}</p>
//                     </div>
//                   </div>

//                   {/* Problem */}
//                   <div className="space-y-3">
//                     <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">The Problem</h4>
//                     <p className="text-[var(--color-text-secondary)] leading-relaxed">
//                       {selectedCase.problem}
//                     </p>
//                   </div>

//                   {/* Solution */}
//                   <div className="space-y-3">
//                     <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">The Solution</h4>
//                     <p className="text-[var(--color-text-secondary)] leading-relaxed">
//                       {selectedCase.solution}
//                     </p>
//                   </div>

//                   {/* Results */}
//                   <div className="space-y-3">
//                     <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">Results</h4>
//                     <div className="grid md:grid-cols-2 gap-3">
//                       {selectedCase.results.map((result, index) => (
//                         <div key={index} className="flex items-center space-x-3 p-3 glass-subtle rounded-lg border border-[var(--color-glass-border)]">
//                           <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
//                           <span className="text-[var(--color-text-secondary)]">{result}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Technologies */}
//                   <div className="space-y-3">
//                     <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">Technologies Used</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {selectedCase.tags.map((tag) => (
//                         <Badge
//                           key={tag}
//                           variant="secondary"
//                           className="glass-subtle border-[var(--color-glass-border)]"
//                         >
//                           {tag}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </section>
//   );
// };