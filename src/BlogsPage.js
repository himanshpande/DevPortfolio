import React, { useState } from "react";

// Hardcoded blog data
const blogsData = [
  {
    id: 1,
    title: "Notes from a product design vibe coding hackathon",
    fullTitle: "Notes from a product design vibe coding hackathon",
    author: "Russell Norris",
    date: "Jul 9, 2025",
    readTime: 6,
    category: "Product Management",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
    content: `# Notes from a product design vibe coding hackathon

Last weekend, I participated in an incredible hackathon that blended product design thinking with rapid coding. Here are my key takeaways from the experience.

## The Challenge

The hackathon brought together designers and developers to build a working prototype in just 48 hours. The theme was "Design for Impact" - creating solutions that could genuinely improve people's lives.

## Key Learnings

### 1. Design-First Approach Works

Starting with user research and wireframes before writing a single line of code saved us countless hours. We identified potential usability issues early, which meant less refactoring later.

### 2. Rapid Prototyping is Powerful

Using tools like Figma for quick iterations allowed us to test multiple concepts before committing to code. This iterative approach led to a more polished final product.

### 3. Collaboration is Key

The most successful teams had designers and developers working side-by-side, not in silos. Real-time feedback loops accelerated our progress significantly.

### 4. User Testing Can't Wait

Even in a hackathon, we found time for quick user tests. The insights we gathered in just 30 minutes dramatically improved our final design.

## The Result

Our team built a mobile app that helps people track their carbon footprint through daily activities. While it's just a prototype, the core concept resonated with judges and users alike.

## Final Thoughts

Hackathons are more than just coding marathons - they're opportunities to experiment, learn, and push boundaries. The combination of design thinking and rapid development created something truly special.

I'm already looking forward to the next one!`
  },
  {
    id: 2,
    title: "Designing for Clarity",
    fullTitle: "Designing for clarity: How we restructured Intercom's information architecture",
    author: "Pranava Tandra",
    date: "Jan 24, 2025",
    readTime: 10,
    category: "Product Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=400&fit=crop",
    content: `# Designing for Clarity: How we restructured Intercom's information architecture

Information architecture (IA) is the backbone of any great product. When users can't find what they're looking for, frustration builds, and engagement drops. Here's how we tackled this challenge at Intercom.

## The Problem

Our product had grown organically over the years, adding features and capabilities without a cohesive navigation strategy. Users were getting lost, support tickets were increasing, and our NPS scores were suffering.

## The Research Phase

We started with comprehensive user research:

- **Card sorting exercises** to understand mental models
- **Tree testing** to validate navigation structures
- **Analytics deep-dives** to see where users were getting stuck
- **User interviews** to hear pain points directly

The data was clear: our navigation was too complex, and key features were buried too deep.

## The Solution

We redesigned our information architecture with three core principles:

### 1. Progressive Disclosure

Instead of showing everything at once, we introduced a tiered navigation system. Primary actions are always visible, while secondary features are accessible but not overwhelming.

### 2. Contextual Grouping

We grouped related features together based on user workflows, not our internal team structure. This meant rethinking how we organized everything from settings to analytics.

### 3. Clear Hierarchy

Every screen now has a clear information hierarchy. Users always know where they are and how to get where they want to go.

## Implementation Challenges

Restructuring a product used by millions of users isn't easy. We had to:

- Maintain backward compatibility for power users
- Create migration paths for existing workflows
- Balance simplicity with feature richness
- Get buy-in from stakeholders across the organization

## Results

After the redesign:
- **40% reduction** in support tickets about navigation
- **25% increase** in feature discovery
- **15% improvement** in user satisfaction scores
- **Faster onboarding** for new users

## Lessons Learned

1. **Start with research** - Data beats assumptions every time
2. **Involve users early** - Test concepts before building
3. **Communicate changes** - Help users understand the "why"
4. **Iterate based on feedback** - The first version won't be perfect

Designing for clarity isn't just about making things look good - it's about making products that truly serve their users.`
  },
  {
    id: 3,
    title: "Two AI agents put to the test",
    fullTitle: "Intercom vs Zendesk: Two AI agents put to the test",
    author: "Sagar Joglekar",
    date: "Nov 14, 2024",
    readTime: 8,
    category: "SaaS",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    content: `# Intercom vs Zendesk: Two AI agents put to the test

AI-powered customer support is no longer a futuristic concept - it's here, and it's transforming how businesses interact with their customers. We put two leading platforms to the test to see which one delivers the best AI agent experience.

## The Test Setup

We created identical test scenarios across both platforms:
- 50 common customer inquiries
- Mix of simple and complex questions
- Various industries and use cases
- Real customer conversation data

## Intercom's AI Agent

### Strengths

**Natural Language Understanding**: Intercom's AI excelled at understanding context and intent, even with ambiguous queries.

**Conversational Flow**: The agent maintained context throughout multi-turn conversations, remembering previous exchanges.

**Integration Depth**: Seamless integration with Intercom's existing features made it feel like a natural extension of the platform.

**Customization**: Extensive customization options allowed us to tailor the agent's personality and responses to our brand.

### Weaknesses

**Response Time**: Occasionally slower response times during peak usage periods.

**Complex Queries**: Struggled slightly with highly technical questions requiring deep product knowledge.

## Zendesk's AI Agent

### Strengths

**Speed**: Consistently fast response times, even under heavy load.

**Knowledge Base**: Excellent at pulling from comprehensive knowledge bases and documentation.

**Multi-Channel**: Strong performance across email, chat, and social media channels.

**Analytics**: Robust analytics and reporting features for tracking agent performance.

### Weaknesses

**Context Retention**: Sometimes lost context in longer conversations.

**Tone Consistency**: Less natural conversational flow compared to Intercom.

**Setup Complexity**: More configuration required to get optimal performance.

## Head-to-Head Comparison

### Accuracy
- **Intercom**: 92% correct responses
- **Zendesk**: 89% correct responses

### Customer Satisfaction
- **Intercom**: 4.6/5 average rating
- **Zendesk**: 4.4/5 average rating

### Response Time
- **Intercom**: Average 2.3 seconds
- **Zendesk**: Average 1.8 seconds

### Cost Efficiency
- **Intercom**: Higher upfront cost, better ROI for complex use cases
- **Zendesk**: More affordable entry point, scales well

## The Verdict

Both platforms offer excellent AI agent capabilities, but they serve different needs:

**Choose Intercom if:**
- You prioritize conversational quality and brand consistency
- You need deep customization options
- You're already using Intercom's ecosystem

**Choose Zendesk if:**
- Speed and scalability are your top priorities
- You need multi-channel support
- You want comprehensive analytics out of the box

## Final Thoughts

The AI agent landscape is rapidly evolving. Both platforms are investing heavily in improving their capabilities, so this comparison represents a snapshot in time. The best choice depends on your specific needs, budget, and existing tech stack.

One thing is clear: AI agents are no longer a nice-to-have - they're becoming essential for modern customer support operations.`
  },
  {
    id: 4,
    title: "Building a culture of continuous improvement",
    fullTitle: "Building a culture of continuous improvement in product teams",
    author: "Sarah Chen",
    date: "Dec 5, 2024",
    readTime: 7,
    category: "Product Management",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    content: `# Building a culture of continuous improvement in product teams

Great products aren't built overnight - they're the result of continuous iteration, learning, and improvement. Here's how we've built a culture that embraces this philosophy.

## The Foundation

Continuous improvement starts with mindset. Every team member needs to believe that there's always a better way to do things.

## Key Practices

### 1. Regular Retrospectives

We hold weekly retrospectives where teams reflect on what went well, what didn't, and what we can improve. These aren't blame sessions - they're learning opportunities.

### 2. Data-Driven Decisions

Every decision is backed by data. We track metrics religiously and use them to guide our improvements.

### 3. Experimentation Culture

We encourage experimentation. Not every experiment will succeed, but every one teaches us something valuable.

### 4. User Feedback Loops

We've built multiple channels for user feedback and make sure it flows directly to product teams.

## Results

Since implementing these practices, we've seen:
- 30% faster feature delivery
- 50% reduction in bugs
- Higher team satisfaction scores
- Better product-market fit

Building this culture takes time, but the results speak for themselves.`
  },
  {
    id: 5,
    title: "The future of user onboarding",
    fullTitle: "The future of user onboarding: AI-powered personalization",
    author: "Michael Torres",
    date: "Oct 18, 2024",
    readTime: 9,
    category: "Onboarding",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    content: `# The future of user onboarding: AI-powered personalization

User onboarding is evolving. Gone are the days of one-size-fits-all tutorials. AI is enabling truly personalized onboarding experiences.

## The Old Way

Traditional onboarding was static - the same tour for every user, regardless of their background, goals, or experience level.

## The New Way

AI-powered onboarding adapts in real-time:
- Personalizes content based on user profile
- Adjusts pace based on user behavior
- Provides contextual help when needed
- Learns from each interaction

## Implementation

We've seen incredible results with AI-powered onboarding:
- 60% increase in activation rates
- 40% reduction in time to value
- Higher user satisfaction scores

The future is personalized, and it's here now.`
  },
  {
    id: 6,
    title: "Success stories from early adopters",
    fullTitle: "Success stories from early adopters: How startups scaled with our platform",
    author: "Emily Watson",
    date: "Sep 22, 2024",
    readTime: 5,
    category: "Success Stories",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    content: `# Success stories from early adopters

We're proud to share stories from startups that have scaled successfully using our platform.

## Case Study 1: TechStart Inc.

TechStart went from 0 to 10,000 users in 6 months using our platform. Their success was driven by:
- Rapid iteration capabilities
- Scalable infrastructure
- Excellent support

## Case Study 2: DesignCo

DesignCo increased their conversion rate by 45% after implementing our onboarding flow. The key was personalization and data-driven optimization.

## Key Takeaways

1. Start small, scale fast
2. Use data to guide decisions
3. Focus on user experience
4. Iterate continuously

These success stories inspire us to keep building better products.`
  },
  {
    id: 7,
    title: "Retention strategies that work",
    fullTitle: "Retention strategies that work: Data from 100+ SaaS companies",
    author: "David Kim",
    date: "Aug 15, 2024",
    readTime: 11,
    category: "Retention",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    content: `# Retention strategies that work

We analyzed data from 100+ SaaS companies to identify what actually works for retention.

## Top Strategies

### 1. Onboarding Excellence
Companies with great onboarding see 50% higher retention rates.

### 2. Regular Engagement
Users who engage weekly are 3x more likely to stay.

### 3. Value Communication
Clear communication about value drives long-term retention.

### 4. Proactive Support
Reaching out before problems occur builds loyalty.

## The Data

Our analysis revealed:
- Average retention rate: 65%
- Top quartile: 85%+
- Key differentiator: User engagement

## Actionable Insights

1. Invest in onboarding
2. Build engagement loops
3. Communicate value regularly
4. Be proactive with support

Retention isn't just about keeping users - it's about creating value they can't live without.`
  },
  {
    id: 8,
    title: "Product discovery best practices",
    fullTitle: "Product discovery best practices: Finding product-market fit",
    author: "Lisa Anderson",
    date: "Jul 28, 2024",
    readTime: 8,
    category: "Product Discovery",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    content: `# Product discovery best practices

Finding product-market fit is the holy grail of product development. Here's what we've learned.

## The Process

### 1. Understand the Problem
Start with deep user research. Understand pain points before building solutions.

### 2. Validate Early
Build MVPs and test assumptions quickly. Fail fast, learn faster.

### 3. Iterate Based on Feedback
Use real user feedback to guide development, not just internal opinions.

### 4. Measure What Matters
Track metrics that indicate product-market fit, not just vanity metrics.

## Common Pitfalls

- Building in isolation
- Ignoring negative feedback
- Focusing on features over value
- Premature scaling

## Success Indicators

- High user engagement
- Organic growth
- Strong retention
- Willingness to pay

Product discovery is a journey, not a destination. Stay curious, stay user-focused, and keep iterating.`
  },
  {
    id: 9,
    title: "Latest product updates",
    fullTitle: "Latest product updates: What's new this quarter",
    author: "James Wilson",
    date: "Jun 10, 2024",
    readTime: 4,
    category: "Product Updates",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    content: `# Latest product updates

We're excited to share what's new this quarter.

## New Features

### AI-Powered Insights
Get intelligent insights about your product usage automatically.

### Enhanced Analytics
Deeper analytics with more customization options.

### Improved Performance
50% faster load times across the platform.

## Improvements

- Better mobile experience
- Streamlined navigation
- Enhanced security features
- More integration options

## What's Next

We're working on:
- Advanced automation features
- Better collaboration tools
- Expanded API capabilities

Stay tuned for more updates!`
  },
  {
    id: 10,
    title: "Finding your aha moment",
    fullTitle: "Finding your aha moment: What makes users fall in love",
    author: "Rachel Green",
    date: "May 5, 2024",
    readTime: 6,
    category: "Aha Moment",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    content: `# Finding your aha moment

The "aha moment" is when users truly understand your product's value. Here's how to find and optimize it.

## What is an Aha Moment?

It's the moment when users "get it" - when they understand why your product is valuable to them specifically.

## Identifying Your Aha Moment

Look for:
- Actions that correlate with retention
- Behaviors that indicate value realization
- Moments when users become advocates

## Optimizing for Aha Moments

1. Reduce time to value
2. Make value obvious
3. Guide users to key actions
4. Celebrate success

## Examples

- Slack: Sending 2,000 messages
- Twitter: Following 30 people
- Dropbox: Sharing a folder

Find your aha moment, then optimize everything to get users there faster.`
  },
  {
    id: 11,
    title: "Adoption strategies for enterprise",
    fullTitle: "Adoption strategies for enterprise: Getting teams to use your product",
    author: "Robert Martinez",
    date: "Apr 12, 2024",
    readTime: 10,
    category: "Adoption",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    content: `# Adoption strategies for enterprise

Enterprise adoption is different from consumer adoption. Here's what works.

## The Challenge

Enterprise products face unique adoption challenges:
- Multiple stakeholders
- Complex decision-making
- Change management
- Training requirements

## Strategies That Work

### 1. Executive Sponsorship
Get C-level buy-in early. It makes everything easier.

### 2. Phased Rollout
Start with pilot teams, then expand gradually.

### 3. Comprehensive Training
Invest in training programs that actually work.

### 4. Success Metrics
Define and track clear success metrics.

## Best Practices

- Start with champions
- Provide excellent support
- Show ROI clearly
- Iterate based on feedback

Enterprise adoption takes time, but with the right strategy, it's achievable.`
  },
  {
    id: 12,
    title: "Interview with product leaders",
    fullTitle: "Interview with product leaders: Insights from industry experts",
    author: "Jennifer Lee",
    date: "Mar 20, 2024",
    readTime: 12,
    category: "Interviews",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    content: `# Interview with product leaders

We sat down with industry experts to discuss the future of product management.

## Key Insights

### On Product Strategy
"Strategy without execution is just wishful thinking." - Expert insights on balancing vision with reality.

### On User Research
"Talk to users early and often. There's no substitute for real conversations." - How top PMs stay user-focused.

### On Team Building
"Great products come from great teams. Invest in your people." - Building high-performing product teams.

### On Innovation
"Innovation isn't about being first - it's about being best." - Rethinking what innovation really means.

## Common Themes

- User-centricity
- Data-driven decisions
- Continuous learning
- Team collaboration

These interviews provide valuable insights for anyone building products.`
  }
];

// All available categories
const categories = [
  "All",
  "Success Stories",
  "SaaS",
  "Retention",
  "Adoption",
  "Product Management",
  "Product Discovery",
  "Product Updates",
  "Onboarding",
  "Aha Moment",
  "Product Design",
  "Interviews"
];

export default function BlogsPage({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "All" 
    ? blogsData 
    : blogsData.filter(blog => blog.category === selectedCategory);

  // Handle blog click
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

  // Format date for display
  const formatDate = (dateString) => {
    return `Published ${dateString}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            {onBack && (
              <button
                onClick={onBack}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                aria-label="Back to home"
              >
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-2">
                Blog
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Insights, stories, and updates from our team
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <h2 className="text-sm font-medium text-slate-500 mb-4">
            Explore by categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              onClick={() => handleBlogClick(blog)}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Title overlay on thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg sm:text-xl line-clamp-2">
                    {blog.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-slate-500 mb-3">
                  {formatDate(blog.date)}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {blog.fullTitle}
                </h2>
                <div className="flex items-center justify-between text-sm text-slate-600 mt-4">
                  <span>{blog.author}</span>
                  <span>{blog.readTime} min</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No blogs found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal for Full Article */}
      {isModalOpen && selectedBlog && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={handleCloseModal}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Content */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div
              className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Article Header Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={selectedBlog.thumbnail}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
                    {selectedBlog.fullTitle}
                  </h1>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-slate-200">
                  <div className="text-sm text-slate-500">
                    {formatDate(selectedBlog.date)}
                  </div>
                  <div className="text-sm font-medium text-slate-700">
                    {selectedBlog.author}
                  </div>
                  <div className="text-sm text-slate-500">
                    {selectedBlog.readTime} min read
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                      {selectedBlog.category}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-slate max-w-none">
                  {selectedBlog.content.split('\n').map((paragraph, index) => {
                    const trimmed = paragraph.trim();
                    
                    if (trimmed.startsWith('# ')) {
                      return (
                        <h1 key={index} className="text-3xl font-black text-slate-900 mt-10 mb-6 first:mt-0">
                          {trimmed.substring(2)}
                        </h1>
                      );
                    } else if (trimmed.startsWith('## ')) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                          {trimmed.substring(3)}
                        </h2>
                      );
                    } else if (trimmed.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold text-slate-800 mt-6 mb-3">
                          {trimmed.substring(4)}
                        </h3>
                      );
                    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                      return (
                        <li key={index} className="ml-6 mb-2 text-slate-700 list-disc">
                          {trimmed.substring(2)}
                        </li>
                      );
                    } else if (trimmed === '') {
                      return <div key={index} className="h-4" />;
                    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                      // Bold text
                      return (
                        <p key={index} className="text-slate-700 leading-relaxed mb-4">
                          <strong>{trimmed.substring(2, trimmed.length - 2)}</strong>
                        </p>
                      );
                    } else {
                      return (
                        <p key={index} className="text-slate-700 leading-relaxed mb-4 text-base">
                          {paragraph}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

