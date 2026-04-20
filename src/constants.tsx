import { 
  Rocket, 
  TrendingUp, 
  Award, 
  Smartphone, 
  Monitor, 
  Building2,
  Cpu,
  ShoppingCart,
  ShieldCheck,
  Code,
  Video
} from 'lucide-react';
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  size: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'ai',
    title: 'AI Automation & Agents',
    description: 'Custom GPTs, automated workflows, and GoHighLevel expert setup to put your business on autopilot.',
    icon: <Cpu className="w-8 h-8 text-brand-blue" />,
    size: 'large',
    tags: ['GHL Эксперт', 'Zapier', 'Make.com']
  },
  {
    id: 'ecom',
    title: 'E-Commerce Growth',
    description: 'Shopify Marketing, Google Shopping Ads, and ROAS Optimization.',
    icon: <ShoppingCart className="w-8 h-8 text-brand-blue" />,
    size: 'medium',
    tags: ['Shopify', 'Google Ads', 'Scaling']
  },
  {
    id: 'fixer',
    title: 'The Google Fixer',
    description: 'Google Merchant Center Suspension Fix and Google Ads Center Setup.',
    icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
    size: 'medium',
    tags: ['GMC Fix', 'Merchant Center', 'Policy']
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Expert design in WordPress, Wix, and Shopify.',
    icon: <Code className="w-8 h-8 text-brand-blue" />,
    size: 'small',
    tags: ['React', 'Liquid', 'PHP']
  },
  {
    id: 'content',
    title: 'The Content Engine',
    description: 'AI Video Creation and Social Media Management.',
    icon: <Video className="w-8 h-8 text-brand-blue" />,
    size: 'small',
    tags: ['UGC-AI', 'TikTok Ads', 'IG Reels']
  }
];

export const portfolio = [
  {
    title: 'Global Retail AI Integration',
    category: 'AI & Automation',
    results: '300% ROAS Increase',
    tools: ['GHL', 'Shopify', 'Google Ads'],
    image: 'https://picsum.photos/seed/diamond1/600/400',
    problem: 'Manual lead processing and low conversion rates on Shopify.',
    solution: 'Integrated GHL and custom AI agents for 24/7 lead nurture.',
    result: '300% ROAS boost in 90 days.'
  },
  {
    title: 'GMC Suspension Recovery - UK Store',
    category: 'E-Com/Ads',
    results: 'Back in 48 Hours',
    tools: ['Google Ads', 'GMC'],
    image: 'https://picsum.photos/seed/diamond2/600/400',
    problem: 'Store suspended for misrepresentation policy.',
    solution: 'Deep audit and fix of all policy violations.',
    result: 'Fully unblocked in 48 hours.'
  },
  {
    title: 'Shopify Plus Fashion Brand',
    category: 'Web/Video',
    results: '$40k/Month Growth',
    tools: ['Shopify', 'Klaviyo'],
    image: 'https://picsum.photos/seed/diamond3/600/400',
    problem: 'Stagnant sales despite high traffic.',
    solution: 'Custom Liquid dev and conversion rate optimization.',
    result: 'Scaled to $40k/month in 4 months.'
  },
  {
    title: 'Real Estate Lead Gen Bot',
    category: 'AI & Automation',
    results: '500+ Qualified Leads',
    tools: ['GHL', 'Make.com'],
    image: 'https://picsum.photos/seed/diamond4/600/400',
    problem: 'High cost per lead and low quality.',
    solution: 'Built a qualifying bot via GHL and Make.com.',
    result: '500+ highly qualified leads generated.'
  }
];

export const tiers = [
  {
    name: 'Sparkle',
    tagline: 'Startup Essentials',
    price: '$997',
    features: ['Single platform setup', 'Basic GMC Fix', 'Essential Automation', '14-Day Delivery'],
    button: 'Start Small'
  },
  {
    name: 'Brilliant',
    tagline: 'Growth Engine',
    price: '$2,997',
    features: ['Multi-channel Ads Management', 'Full Shopify Optimization', 'GHL Snapshot Setup', 'Priority Support'],
    button: 'Scale Now',
    featured: true
  },
  {
    name: 'Diamond',
    tagline: 'Complete Automation',
    price: '$5,997+',
    features: ['Agency-on-Autopilot System', 'Custom AI Agents (Voice/Text)', 'Integrated Marketing Ecosystem', 'White-Glove Management'],
    button: 'Go Diamond'
  }
];

export const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Founder',
    company: 'Luxe Wear',
    quote: "Diamond Team didn't just fix our GMC suspension—they rebuilt our entire acquisition engine. Our ROAS has never been higher.",
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'Marcus Thorne',
    role: 'E-com Director',
    company: 'Velocity Health',
    quote: 'The AI automation agents they built for our customer support reduced our overhead by 40% while improving response times drastically.',
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  },
  {
    name: 'Elena Rodriguez',
    role: 'CEO',
    company: 'Artisan Co.',
    quote: 'Expertise at its finest. They understand the diamond standard of multi-channel marketing. Truly an agency shift for us.',
    avatar: 'https://picsum.photos/seed/elena/100/100'
  }
];

export const faqs = [
  {
    q: 'How quickly can you fix a GMC suspension?',
    a: 'Most suspensions are resolved within 3-7 business days, depending on the severity of the policy violation. Our "Quick-Audit" usually identifies the root cause in 24 hours.'
  },
  {
    q: 'What platforms do you use for AI automation?',
    a: 'We specialize in GoHighLevel (GHL), Make.com, and Zapier for workflows. For AI agents, we leverage OpenAI API, Anthropic, and Vapi for voice solutions.'
  },
  {
    q: 'Do you provide ongoing management?',
    a: 'Absolutely. While we offer one-time setups, our highest-ROI clients partner with us for monthly optimization, ad management, and continuous automation upgrades.'
  }
];

export const stats = [
  { label: 'Successful Projects', value: '450+', icon: <Rocket className="w-5 h-5 text-brand-blue" /> },
  { label: 'Avg ROAS Increase', value: '3.2x', icon: <TrendingUp className="w-5 h-5 text-brand-blue" /> },
  { label: 'Years Experience', value: '8+', icon: <Award className="w-5 h-5 text-brand-blue" /> }
];

export const niches = [
  { title: 'Fashion', description: 'Visual storytelling and conversion-optimized Shopify flows for luxury apparel.', icon: <Smartphone className="w-6 h-6" /> },
  { title: 'Tech / SaaS', description: 'Complex lead gen automation and AI nurture sequences for software brands.', icon: <Monitor className="w-6 h-6" /> },
  { title: 'Real Estate', description: 'Automated CRM systems and highly targeted local ad campaigns.', icon: <Building2 className="w-6 h-6" /> }
];

export const blogPosts = [
  {
    id: 1,
    title: 'How AI Agents are replacing Chatbots',
    excerpt: 'Explore the shift from static scripts to dynamic AI agents that can handle complex customer journeys.',
    date: 'April 15, 2026',
    category: 'AI & Automation',
    image: 'https://picsum.photos/seed/blog1/600/400'
  },
  {
    id: 2,
    title: 'The 2026 Guide to GMC Suspensions',
    excerpt: 'Everything you need to know about navigating the latest Google Merchant Center policy updates.',
    date: 'April 10, 2026',
    category: 'Google Ads',
    image: 'https://picsum.photos/seed/blog2/600/400'
  },
  {
    id: 3,
    title: 'Why Liquid Coding beats Shopify Templates',
    excerpt: 'Custom Liquid development offers unparalleled performance and flexibility over standard themes.',
    date: 'April 5, 2026',
    category: 'E-Commerce',
    image: 'https://picsum.photos/seed/blog3/600/400'
  }
];
