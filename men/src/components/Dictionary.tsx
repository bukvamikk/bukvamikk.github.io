import React, { useState, useEffect } from 'react';
import { 
  Search, 
  HelpCircle, 
  Sparkles, 
  Bookmark, 
  BookmarkCheck,
  BookOpen, 
  Share2, 
  Globe, 
  Hash, 
  Check, 
  MessageCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface DictItem {
  id: string;
  term: string;
  definition: string;
  category: 'systemic' | 'behavioral' | 'socio-economic' | 'resistance' | 'manosphere' | 'digital-resistance';
  type: 'term' | 'abbreviation';
  origin?: string; // e.g. "Kimberlé Crenshaw" or "Manosphere"
  context?: string; // additional educational context or self-reflective question
}

const DICTIONARY_ITEMS: DictItem[] = [
  // 1. Systemic Oppression & Structural Inequality
  {
    id: 'sys-patriarchy',
    term: 'Patriarchy',
    definition: 'A social system in which power is primarily held by men, dominating roles in political leadership, moral authority, social privilege, and control of property.',
    category: 'systemic',
    type: 'term',
    context: 'Reflect: In what areas of your family or workplace do you notice patriarchy operating as the default default?'
  },
  {
    id: 'sys-misogyny',
    term: 'Misogyny',
    definition: 'Contempt for, ingrained prejudice against, or hatred of women. While sexism is an ideology that treats women as inferior, misogyny acts as the enforcement mechanism that punishes women who violate patriarchal norms.',
    category: 'systemic',
    type: 'term',
    context: 'Key distinction: Sexism constructs the rules; misogyny enforces them through social punishment or verbal policing.'
  },
  {
    id: 'sys-sexism',
    term: 'Sexism',
    definition: 'Prejudice, stereotyping, or discrimination, typically against women, on the basis of sex or gender.',
    category: 'systemic',
    type: 'term',
    context: 'Reflect: Have you ever made assumptions about a female colleague’s competency or roles based on her sex?'
  },
  {
    id: 'sys-androcentrism',
    term: 'Androcentrism',
    definition: 'The practice, conscious or otherwise, of placing a masculine point of view at the center of one’s world view, culture, and history, thereby culturally marginalizing femininity.',
    category: 'systemic',
    type: 'term',
    context: 'Note: This makes male experiences represent the default "human" standard, framing women’s experiences as niche or "other".'
  },
  {
    id: 'sys-intersectionality',
    term: 'Intersectionality',
    definition: 'A framework developed to understand how various social identities (e.g., gender, race, class, sexuality) overlap and intersect to create unique dynamics of discrimination or disadvantage.',
    category: 'systemic',
    type: 'term',
    origin: 'Kimberlé Crenshaw',
    context: 'Understand: A working-class woman of color experiences oppression differently than a wealthy white woman. Allyship must be intersectional.'
  },

  // 2. Behavioral Patterns & Microaggressions
  {
    id: 'beh-mansplaining',
    term: 'Mansplaining',
    definition: 'A blend of "man" and "explaining." It occurs when a man explains something to a woman in a condescending, oversimplified, or patronizing manner, often assuming she knows less about the topic than he does (even if she is an expert).',
    category: 'behavioral',
    type: 'term',
    context: 'A habitual dynamic. Next time you start explaining, pause and ask: "Are you familiar with this?" or just listen.'
  },
  {
    id: 'beh-gaslighting',
    term: 'Gaslighting',
    definition: 'A form of psychological manipulation where a person seeks to make a victim doubt their own sanity, perception, or memory—frequently used to dismiss women’s valid complaints about unfair treatment.',
    category: 'behavioral',
    type: 'term',
    context: 'Example: Saying "You are just overreacting" or "That never happened" to avoid accountability.'
  },
  {
    id: 'beh-tonepolicing',
    term: 'Tone Policing',
    definition: 'An anti-debate tactic that focuses on the emotion or delivery of a message (e.g., calling a woman "too emotional" or "aggressive") rather than addressing the actual substance of her argument.',
    category: 'behavioral',
    type: 'term',
    context: 'Reflect: Are you ignoring the truth of her anger because her delivery makes you feel uncomfortable or defensive?'
  },
  {
    id: 'beh-hepeating',
    term: 'Hepeating',
    definition: 'When a woman suggests an idea or makes a point and it is ignored, but a man repeats the exact same idea moments later and receives praise or recognition for it.',
    category: 'behavioral',
    type: 'term',
    context: 'Ally action: Call it out! "As Sarah was saying a moment ago..." and credit the original creator.'
  },
  {
    id: 'beh-doubleburden',
    term: 'The "Double Burden" (or Second Shift)',
    definition: 'The phenomenon where women work a full day at a paid job, only to return home to complete a "second shift" of unpaid domestic labor and childcare, which is disproportionately expected of them.',
    category: 'behavioral',
    type: 'term',
    context: 'Reflect: How is domestic task allocation distributed in your household? Who carries the mental load?'
  },

  // 3. Socio-Economic Concepts
  {
    id: 'soc-wagegap',
    term: 'The Gender Wage Gap',
    definition: 'The average difference between the remuneration for men and women who are working. It is often measured as the ratio of female-to-male median yearly earnings among full-time, year-round workers.',
    category: 'socio-economic',
    type: 'term',
    context: 'Fact: The gap is widened further by the intersection of race and disability.'
  },
  {
    id: 'soc-glassceiling',
    term: 'The Glass Ceiling',
    definition: 'An unacknowledged, ultimate barrier to advancement in a profession, especially affecting women and members of minorities, preventing them from rising to upper-level positions.',
    category: 'socio-economic',
    type: 'term',
    context: 'Reflect: Under-representation in key executive roles is rarely a lack of talent or interest; it is structural filtering.'
  },
  {
    id: 'soc-rapeculture',
    term: 'Rape Culture',
    definition: 'A sociological concept used to describe a setting in which sexual violence is pervasive and normalized by social attitudes regarding gender and sexuality. It includes behaviors like victim-blaming, sexual objectification, and trivializing sexual assault.',
    category: 'socio-economic',
    type: 'term',
    context: 'Dismantling rape culture starts with refusing to participate in Locker Room talk, locker room jokes, or dismissive attitudes.'
  },
  {
    id: 'soc-benevolentsexism',
    term: 'Benevolent Sexism',
    definition: 'A chivalrous attitude that appears favorable to women on the surface (e.g., the idea that women are fragile and need protecting) but actually reinforces the notion that women are weak, passive, and unsuited for positions of power.',
    category: 'socio-economic',
    type: 'term',
    context: 'Reflect: Do you patronize women under the guise of "protection" or "politeness," thus restricting their autonomy?'
  },

  // 4. Resistance, Feminism & Liberation
  {
    id: 'res-feminism',
    term: 'Feminism',
    definition: 'The belief in the social, economic, and political equality of the sexes. It manifests in various waves and schools of thought (e.g., Liberal, Radical, Marxist, Intersectional, and Ecofeminism).',
    category: 'resistance',
    type: 'term',
    context: 'Note: Feminism is not about superiority, but building co-equal agency, dignity, and access.'
  },
  {
    id: 'res-bodilyautonomy',
    term: 'Bodily Autonomy',
    definition: 'The right to governance over one’s own body without external influence or coercion. This is a foundational concept in fights for reproductive rights and protection against violence.',
    category: 'resistance',
    type: 'term',
    context: 'Remember: This applies to consent, medical freedom, reproductive choices, and physical boundary integrity.'
  },
  {
    id: 'res-maleglance',
    term: 'Male Glance',
    definition: 'A term coined by author Lili Loufbourow to describe the casual, widespread tendency to dismiss or undervalue art, literature, or ideas created by or centered around women, assuming them to be shallow or insignificant without close reading.',
    category: 'resistance',
    type: 'term',
    origin: 'Lili Loufbourow',
    context: 'Key self-check: Do you bypass female-authored articles or movies assuming they are "emotional" or lacking analytical depth?'
  },
  {
    id: 'res-malegaze',
    term: 'The Male Gaze',
    definition: 'A concept in feminist film theory denoting the depiction of women in visual arts and literature from a masculine, heterosexual perspective, presenting women as objects of male pleasure.',
    category: 'resistance',
    type: 'term',
    context: 'Reflect: How has media training conditioned us to objectify women, prioritizing their visual appeal over their full humanity?'
  },

  // 5. The "Manosphere" & Digital Misogyny
  {
    id: 'man-weaponizedinc',
    term: 'Weaponized Incompetence',
    definition: 'The act of deliberately performing a task poorly or pretending not to know how to do it (such as household chores or childcare) so that someone else (usually a female partner) will take over and do it instead.',
    category: 'manosphere',
    type: 'term',
    context: 'Relational warning: Feigning ignorance increases exhausting work on your partner and corrodes trust quickly.'
  },
  {
    id: 'man-tradwife',
    term: 'Tradwife',
    definition: 'Short for "traditional wife." A major social media aesthetic/trend where creators glorify a return to strict, 1950s-style gender roles. While choosing domestic life is valid, the online subculture frequently attacks feminism and frames a woman’s submission to her husband as her only true purpose.',
    category: 'manosphere',
    type: 'term',
    context: 'Aesthetic trap: Algorithmic tradwife trends often romanticize systems of zero safety nets or direct independent wealth for women.'
  },
  {
    id: 'man-highlowvalue',
    term: 'High-Value Man / Low-Value Woman',
    definition: 'Pseudo-sociological terms popular in dating-coach algorithms. They rank human beings based on capitalistic and patriarchal metrics (e.g., a man’s income and dominance vs. a woman’s youth, compliance, and "body count").',
    category: 'manosphere',
    type: 'term',
    context: 'Warning: This transactional ranking reduces human dignity to metrics of ownership and youth.'
  },
  {
    id: 'man-blackpill',
    term: 'The Black Pill',
    definition: 'A deeply fatalistic and nihilistic philosophy common in radical online spaces (especially among incels, or involuntary celibates). It states that a person\'s romantic and social success is entirely determined by genetics and facial structure, viewing gender equality as a lie that destroys men.',
    category: 'manosphere',
    type: 'term',
    context: 'Psychological toll: It feeds on male insecurity, reinforcing isolation, anger, and absolute despair rather than building genuine relational capacity.'
  },
  {
    id: 'man-foid',
    term: 'Foid / Femoid',
    definition: 'Short for "Female Humanoid Organism." A highly derogatory de-humanizing term used in radical anti-feminist forums to strip women of their humanity, reducing them to biological objects.',
    category: 'manosphere',
    type: 'abbreviation',
    context: 'Language check: Part of radical internet communities designed intentionally to eliminate empathy.'
  },
  {
    id: 'man-awalt',
    term: 'AWALT',
    definition: 'An acronym for "All Women Are Like That." Used in the manosphere to generalize, stereotype, and dismiss women’s individual actions, arguments, or boundaries.',
    category: 'manosphere',
    type: 'abbreviation',
    context: 'Trap: Erases individuality to justify stereotyping, allowing men to reject female arguments, expressions or boundaries cleanly.'
  },
  {
    id: 'man-mgtow',
    term: 'MGTOW',
    definition: 'An acronym for "Men Going Their Own Way." An anti-feminist digital movement of men who advocate for cutting off romantic relationships with women entirely, claiming modern society and family courts are rigged against men by feminist agendas.',
    category: 'manosphere',
    type: 'abbreviation',
    context: 'Analysis: Instead of co-creating equal ground, MGTOW retreats on grievances and demonizes equal rights.'
  },
  {
    id: 'man-nlog',
    term: 'NLOG',
    definition: 'Standing for "Not Like Other Girls." A social media archetype used to describe internalized misogyny, where a woman attempts to gain male approval by separating herself from other women and mocking traditionally feminine traits.',
    category: 'manosphere',
    type: 'abbreviation',
    context: 'Reflect: Internalized sexism leads people to distance themselves from their peers to feel valued.'
  },

  // 6. Digital Feminist Resistance & Shorthand
  {
    id: 'dig-ragebaiting',
    term: 'Rage-Baiting (Gendered)',
    definition: 'Content intentionally designed by creators to spark outrage—often by posting aggressively sexist or patriarchal takes—solely to manipulate the platform’s algorithm for views, comments, and profit.',
    category: 'digital-resistance',
    type: 'term',
    context: 'Action point: Do not engage with clickbait feeds. Attention is profit for extreme, toxic profiles.'
  },
  {
    id: 'dig-redlining',
    term: 'Digital Redlining (Gender Bias)',
    definition: 'The hidden algorithmic bias where social media moderation systems disproportionately flag, shadowban, or remove educational content about women’s health, reproductive rights, or sexual violence while leaving misogynistic commentary active.',
    category: 'digital-resistance',
    type: 'term',
    context: 'Algorithmic systemic bias: How digital platforms censor safety content while amplifying highly toxic content.'
  },
  {
    id: 'dig-gbv',
    term: 'GBV',
    definition: 'Gender-Based Violence. A critical term used globally and across social platforms to categorize violence that is directed against a person because of their gender (disproportionately affecting women and girls).',
    category: 'digital-resistance',
    type: 'abbreviation',
    context: 'Includes: Domestic physical harm, systemic psychological cruelty, online tracking harassment, and reproductive abuse.'
  },
  {
    id: 'dig-srhr',
    term: 'SRHR',
    definition: 'Sexual and Reproductive Health and Rights. An essential acronym used online to advocate for bodily autonomy, access to safe healthcare, abortion rights, and comprehensive sex education.',
    category: 'digital-resistance',
    type: 'abbreviation',
    context: 'Vital for global advocacy, ensuring health privacy and safe reproductive choices for all.'
  },
  {
    id: 'dig-mmiwg',
    term: 'MMIWG / MMIP',
    definition: 'Missing and Murdered Indigenous Women and Girls (sometimes expanded to Missing and Murdered Indigenous People). A vital digital human rights campaign and hashtag used to draw attention to the systemic neglect, high rates of violence, and lack of law enforcement response regarding indigenous women.',
    category: 'digital-resistance',
    type: 'abbreviation',
    context: 'Critical advocacy exposing how race, colonialism, and sex-based violence combine in systemic failures.'
  },
  {
    id: 'dig-sa',
    term: 'SA',
    definition: 'Sexual Assault. A crucial piece of platform shorthand. Because social media algorithms often censor or restrict posts containing the words "rape" or "assault," activists and survivors use "SA" (or the visual alternative "grape") to bypass censorship and safely share their stories or resources.',
    category: 'digital-resistance',
    type: 'abbreviation',
    context: 'Platform survival: Activists develop creative code words to bypass algorithmic censorship of sensitive education topics.'
  }
];

const CATEGORY_META = {
  all: { name: 'All Concepts', desc: 'Browse the entire relational learning vocabulary.' },
  systemic: { name: 'Systemic Oppression', desc: 'Socio-political systems that preserve male power and structural asymmetry.' },
  behavioral: { name: 'Behavior & Patterns', desc: 'Everyday actions, communication routines, and micro-behaviors.' },
  'socio-economic': { name: 'Socio-Economic', desc: 'Financial gaps, professional gates, and physical safety hurdles.' },
  resistance: { name: 'Resistance & Liberation', desc: 'Foundations of equality, autonomy, and critical feminist theory.' },
  manosphere: { name: 'Manosphere & Misogyny', desc: 'Digital spaces, supremacy narratives, and radical algorithmic keywords.' },
  'digital-resistance': { name: 'Digital Resistance', desc: 'Solidarity terms, safety codes, and social shorthand campaigns.' }
};

interface DictionaryProps {
  onLearnTerm?: (termName: string) => void;
}

export function Dictionary({ onLearnTerm }: DictionaryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeType, setActiveType] = useState<'all' | 'term' | 'abbreviation'>('all');
  
  // Bookmarked terms
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('consen_teach_dict_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('consen_teach_dict_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter(b => b !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  // Filter and sort items alphabetically
  const filteredItems = DICTIONARY_ITEMS.filter((item) => {
    const matchesSearch = 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.context && item.context.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.origin && item.origin.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesType = activeType === 'all' || item.type === activeType;

    return matchesSearch && matchesCategory && matchesType;
  }).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="space-y-6 animate-fade-in" id="dictionary-section">
      {/* Intro Header Card */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-2">
          <BookOpen size={18} className="text-emerald-600" />
          <span className="text-[10px] font-bold tracking-widest font-mono uppercase text-neutral-500">
            Dismantling Hegemonies Terminology
          </span>
        </div>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          Relational Allyship Glossary
        </h2>
        <p className="text-sm text-neutral-650 leading-relaxed max-w-3xl">
          Language is either a tool for domination or an instrument for liberation. True self-reflective allyship requires us to understand the actual vocabularies of systemic power dynamics. Explore how concepts operate, and examine where patriarchal habits hide.
        </p>

        {/* Social media narrative block */}
        <div className="rounded-xl bg-neutral-55 bg-neutral-50/70 p-4 border-l-4 border-emerald-500 text-xs text-neutral-600 leading-relaxed italic">
          "Social media has fundamentally changed how these conversations happen. It has accelerated the spread of anti-feminist rhetoric, but it has also given feminists a powerful space to organize, create shorthand terms, and call out toxic behavior in real time."
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="grid gap-6 lg:grid-cols-12 items-start" id="dict-workspace">
        
        {/* SIDEBAR: Filters & Categories (4 cols) */}
        <div className="lg:col-span-4 space-y-5" id="dict-filters-sidebar">
          
          {/* Quick Search Box */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm space-y-3">
            <h4 className="text-xs font-bold font-mono text-neutral-700 uppercase">Search Directory</h4>
            <div className="relative rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 flex items-center shadow-inner focus-within:ring-1 focus-within:ring-emerald-500/50 focus-within:border-emerald-500/50 transition-all">
              <Search size={16} className="text-neutral-400 mr-2 shrink-0" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Find patriarchy terms, abbreviations..."
                type="text"
                className="w-full bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
                id="search-input-dict"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="text-xs font-bold text-neutral-400 hover:text-neutral-600 font-mono ml-2 cursor-pointer"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Categories Selector list */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm space-y-3">
            <h4 className="text-xs font-bold font-mono text-neutral-700 uppercase">Systemic Categories</h4>
            <div className="flex flex-col gap-1">
              {Object.entries(CATEGORY_META).map(([key, category]) => {
                const isSelected = activeCategory === key;
                const count = key === 'all' 
                  ? DICTIONARY_ITEMS.length 
                  : DICTIONARY_ITEMS.filter(i => i.category === key).length;

                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-900 border border-neutral-800 text-white font-semibold shadow-sm'
                        : 'text-neutral-650 hover:bg-neutral-50 hover:text-neutral-900 border border-transparent'
                    }`}
                  >
                    <span className="truncate">{category.name}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-emerald-600 text-white' : 'bg-neutral-100 text-neutral-550'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Filter by Type */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm space-y-3">
            <h4 className="text-xs font-bold font-mono text-neutral-700 uppercase font-bold">Vocabulary Type</h4>
            <div className="grid grid-cols-3 gap-1.5">
              {(['all', 'term', 'abbreviation'] as const).map((type) => {
                const isSelected = activeType === type;
                return (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`rounded-lg py-1.5 text-[10px] font-bold font-mono uppercase text-center transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                        : 'bg-white text-neutral-650 border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    {type === 'all' ? 'All Types' : type + 's'}
                  </button>
                );
              })}
            </div>
            {bookmarks.length > 0 && (
              <div className="pt-2 border-t border-neutral-100">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setActiveType('all');
                    // We can filter bookmarks inside the main view if clicked
                  }}
                  className="w-full text-left text-xs text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1.5 cursor-pointer font-mono"
                >
                  <BookmarkCheck size={14} /> Focus Study Bench ({bookmarks.length})
                </button>
              </div>
            )}
          </div>

        </div>

        {/* CONTAINER: Glossary Cards Block (8 cols) */}
        <main className="lg:col-span-8 space-y-4" id="dict-results-stage">
          
          <div className="flex items-center justify-between text-xs font-mono text-neutral-500 px-1">
            <span>
              Showing {filteredItems.length} alignment concepts
              {activeCategory !== 'all' && ` in ${CATEGORY_META[activeCategory as keyof typeof CATEGORY_META]?.name}`}
            </span>
            <span>Reflector Set</span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-12 text-center text-neutral-500">
              <HelpCircle size={32} className="mx-auto text-neutral-300 mb-3" />
              <p className="font-semibold text-neutral-800 text-sm">No alignment terms matched your filters</p>
              <p className="text-xs text-neutral-400 mt-1">Try resetting your queries or category filters.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                  setActiveType('all');
                }}
                className="mt-4 rounded-lg bg-neutral-900 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider font-mono cursor-pointer"
              >
                Reset Selection Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item, index) => {
                const isBookmarked = bookmarks.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.05, 0.4) }}
                    className="group relative rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300"
                    id={`dict-word-card-${item.id}`}
                  >
                    {/* Corner category & bookmark header */}
                    <div className="flex items-center justify-between gap-4 flex-wrap border-b border-neutral-100 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] px-1.5 py-0.5 font-bold font-mono tracking-wider rounded uppercase border ${
                          item.type === 'abbreviation'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}>
                          {item.type}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-450 uppercase tracking-widest text-neutral-500 font-semibold">
                          {CATEGORY_META[item.category]?.name}
                        </span>
                        {item.origin && (
                          <>
                            <span className="text-neutral-300 text-[10px]">•</span>
                            <span className="text-[10px] font-mono font-medium text-neutral-500">
                              By {item.origin}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Bookmark / Study checklist button */}
                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                          isBookmarked 
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                            : 'bg-transparent text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50 border-transparent'
                        }`}
                        title={isBookmarked ? 'Bookmarked for focus' : 'Add to focus study list'}
                      >
                        {isBookmarked ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
                      </button>
                    </div>

                    {/* Term & Formulation */}
                    <div className="space-y-2">
                      <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-emerald-750 transition-colors flex items-center gap-2">
                        {item.term}
                      </h3>
                      <p className="text-sm text-neutral-700 leading-relaxed font-serif">
                        {item.definition}
                      </p>
                    </div>

                    {/* Interactive Self-Reflection context */}
                    {item.context && (
                      <div className="mt-4 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200 flex gap-2.5 items-start">
                        <Lightbulb size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-750 block">
                            Self-study Reflection
                          </span>
                          <p className="text-xs text-neutral-600 italic leading-relaxed">
                            {item.context}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Core pedagogical note footer */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 flex flex-col sm:flex-row gap-4 items-center">
            <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              <Sparkles size={18} />
            </div>
            <div className="space-y-0.5 text-center sm:text-left">
              <h5 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">Language as Allyship Work</h5>
              <p className="text-xs text-neutral-550 leading-relaxed text-neutral-500">
                Correctly naming a destructive dynamic removes its invisible authority. Use this dictionary alongside the Decision scenarios to check when actions match patriarchal or egalitarian paths.
              </p>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}
