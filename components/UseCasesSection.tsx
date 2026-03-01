'use client';

import { useState } from 'react';
import Badge from './Badge';

type TabType = 'marketing' | 'sales' | 'industry';

interface UseCase {
  title: string;
  description: string;
}

const useCasesData = {
  marketing: {
    title: 'Marketing',
    color: '#FF5C00',
    cases: [
      {
        title: '1. Creator Discovery & Outreach',
        description: 'Analyze social videos to find creators, auto-score, build profiles; generate candidate lists, estimate reach potential, recommend best posting times',
      },
      {
        title: '2. Competitor Video Monitoring',
        description: 'Monitor competitor content, identify trending formats, track share of voice, new campaign alerts',
      },
      {
        title: '3. Video Content Management',
        description: 'AI search, auto-indexing, storyboard thumbnails, searchable transcripts, DAM integration',
      },
      {
        title: '4. Content Repurposing',
        description: 'Landscape/portrait conversion, highlight reels, remix adaptations, multilingual dubbing/subtitles, end-to-end output',
      },
      {
        title: '5. Video Moderation',
        description: 'Policy scanning, brand safety, quality checks, duplicate detection, brand guideline verification',
      },
      {
        title: '6. Social Publishing & Analytics',
        description: 'One-click multi-platform publish, auto-scheduling, cross-platform analytics, viral factor identification',
      },
    ],
  },
  sales: {
    title: 'Sales',
    color: '#22C55E',
    cases: [
      {
        title: '1. Sales Enablement',
        description: '1:1 custom demos, industry-specific decks, account research, extract pain points and buying signals',
      },
      {
        title: '2. CRM & Pipeline',
        description: 'Auto-import meeting summaries to CRM, extract opportunity signals, forecast outcomes, risk identification',
      },
      {
        title: '3. Real-Time Meeting Support',
        description: 'Pre-meeting briefs, in-call coaching, sentiment analysis, post-meeting summary and follow-up emails',
      },
      {
        title: '4. Discovery & Qualification',
        description: 'BANT/MEDDIC scoring, gap tagging, ROI case generation',
      },
    ],
  },
  industry: {
    title: 'Industry',
    color: '#785DE1',
    cases: [
      {
        title: '1. Security',
        description: 'Surveillance, SLP checks, employee compliance, retail analytics, anomaly alerts',
      },
      {
        title: '2. Media & Entertainment',
        description: 'Large-scale search, AI editing, rights management, localization',
      },
      {
        title: '3. Wearables',
        description: 'Continuous capture, memory retrieval, digital twin, contextual assistant',
      },
    ],
  },
};

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState<TabType>('marketing');
  const currentData = useCasesData[activeTab];

  return (
    <section className="bg-bg-0 w-full flex flex-col gap-[60px] py-[100px] px-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[24px]">
        <Badge
          text="Use Cases"
          dotColor="#22C55E"
          textColor="#22C55E"
          bgColor="#22C55E15"
        />
        <h2 className="text-text-0 font-serif text-[48px] tracking-[-1px] text-center">
          Use Cases
        </h2>
        <p className="text-text-1 font-sans text-[18px] leading-[1.6] text-center">
          From marketing to sales, from general to vertical — LUCI covers every scenario
        </p>
      </div>

      {/* Tabs and Content */}
      <div className="flex flex-col gap-[24px]">
        {/* Tab Navigation */}
        <div className="flex gap-[12px]">
          <button
            onClick={() => setActiveTab('marketing')}
            className={`rounded-[8px] py-[10px] px-[20px] font-sans text-[14px] transition-all ${
              activeTab === 'marketing'
                ? 'bg-[#FF5C0015] text-primary font-semibold'
                : 'bg-bg-1 text-text-3 font-medium hover:text-text-1'
            }`}
          >
            Marketing
          </button>
          <button
            onClick={() => setActiveTab('sales')}
            className={`rounded-[8px] py-[10px] px-[20px] font-sans text-[14px] transition-all ${
              activeTab === 'sales'
                ? 'bg-[#22C55E15] text-[#22C55E] font-semibold'
                : 'bg-bg-1 text-text-3 font-medium hover:text-text-1'
            }`}
          >
            Sales
          </button>
          <button
            onClick={() => setActiveTab('industry')}
            className={`rounded-[8px] py-[10px] px-[20px] font-sans text-[14px] transition-all ${
              activeTab === 'industry'
                ? 'bg-[#785DE115] text-[#785DE1] font-semibold'
                : 'bg-bg-1 text-text-3 font-medium hover:text-text-1'
            }`}
          >
            Industry
          </button>
        </div>

        {/* Use Case Card (Placeholder) */}
        <div className="flex gap-[24px]">
          <div className="bg-bg-1 rounded-[16px] flex-1 flex flex-col">
            {/* Image Placeholder */}
            <div className="bg-bg-2 rounded-t-[16px] h-[200px] flex items-center justify-center">
              <span className="text-text-3 font-mono text-[13px] font-medium">
                [Image placeholder]
              </span>
            </div>
            {/* Card Content */}
            <div className="p-[20px] flex flex-col gap-[10px]">
              <h3 className="text-text-0 font-serif text-[20px] tracking-[-0.5px]">
                Creator Discovery & Outreach
              </h3>
              <p className="text-text-1 font-sans text-[13px] leading-[1.6]">
                Analyze social videos to find creators, auto-score, build profiles; generate candidate lists, estimate reach potential, recommend best posting times
              </p>
              <div className="bg-[#785DE115] rounded-[6px] py-[4px] px-[10px] self-start">
                <span className="text-[#785DE1] font-mono text-[10px] font-medium">
                  Marketing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Text List */}
      <div className="flex flex-col gap-[32px] pt-[40px]">
        <div className="flex flex-col gap-[12px]">
          <h3
            className="font-mono text-[14px] font-semibold tracking-[1px]"
            style={{ color: currentData.color }}
          >
            {currentData.title}
          </h3>
          {currentData.cases.map((useCase, index) => (
            <p
              key={index}
              className="text-text-1 font-sans text-[14px] leading-[1.6]"
            >
              <span className="text-text-0 font-sans text-[14px] font-semibold">
                {useCase.title}
              </span>
              {' — '}
              {useCase.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
