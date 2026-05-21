import { Scenario } from '../types';

export const SCENARIOS: Scenario[] = [
  // ==========================================
  // LEVEL 1: FOUNDATION (Communication & Micro-Boundaries)
  // ==========================================
  {
    id: "l1-s1",
    title: "The Chore Distribution",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Mental Load / Domestic Labor",
    narrative: "Your partner points out that while you 'help' with chores when she asks, she is the one who has to organize, plan, schedule, and keep track of domestic supplies. She tells you: 'Having to manage you is a stressful, exhausting chore in itself.'",
    question: "How do you respond to your partner calling out your reliance on her domestic management?",
    choices: [
      {
        id: "A",
        text: "Defend your willingness to do whatever she asks, telling her she just needs to make a list for you since you can't read her mind, believing this is a fair compromise.",
        systemicImpact: "You reinforce the default 'manager-employee' marital hierarchy. By requiring her to create lists, you extract her cognitive planning labor while only volunteering for physical execution.",
        egoThreat: "Irritation at being corrected despite 'having good intentions' and willingness to execute tasks.",
        egalitarianGoal: "Relying on list-making to bypass the burden of cognitive domestic labor.",
        scores: { egalitarianIndex: 3, conflictResolution: 4, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Acknowledge that managing you is frustrating, and ask her to assign you three fixed chores that you are completely in charge of so she doesn't have to think about them.",
        systemicImpact: "An incomplete shift. While outsourcing specific tasks offsets physical labor, the macro-coordination, scheduling, and standard-setting of the home remain her default burden.",
        egoThreat: "Anxiety of taking on joint responsibilities without a safety net or guide.",
        egalitarianGoal: "Partial labor delegation while keeping the overall manager structure.",
        scores: { egalitarianIndex: 6, conflictResolution: 6, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Validate her feedback entirely. Set up a structured discussion to audit the 'Mental Load'. Map out all cognitive tasks and take full ownership of entire categories (e.g., groceries) from anticipation to execution.",
        systemicImpact: "You actively disassemble the default gender division of labor. True partner peer equality is met only when you take full cognitive ownership (anticipating, planning, doing) of domestic categories.",
        egoThreat: "Accepting that domestic standard-setting is your responsibility too, requiring steady mental effort.",
        egalitarianGoal: "Complete deconstruction of helper privilege and shared structural citizenship.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l1-s2",
    title: "The Interrupting Partner",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Conversational Dominance",
    narrative: "During a dinner with friends, your partner starts sharing an experience. You realize you have a strong, immediate urge to jump in, talk over her to correct a minor detail, or finish the story to make it sound more exciting from your perspective.",
    question: "How do you navigate your habit of conversational dominance and talking over your partner in public?",
    choices: [
      {
        id: "A",
        text: "Give in to your impulse. Finish her story for her and redirect the group's focus to your narrative, thinking you're just keeping the table conversation lively.",
        systemicImpact: "You reinforce conversational patriarchy. Undermining her narrative space signals to the group that her speech is secondary or lacks authority without your refinement.",
        egoThreat: "Urge to remain the social center of attention and be seen as the dominant storyteller.",
        egalitarianGoal: "Conversational dominance at the direct expense of your partner's floor.",
        scores: { egalitarianIndex: 2, conflictResolution: 4, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Suppress the impulse to interject in the moment, but later tell her privately that you thought she was leaving out the best parts, hoping she will let you co-tell in the future.",
        systemicImpact: "Private critique. While you maintain public decorum, you still assert conversational authority behind closed doors, treating her narrative capacity as needing your guidance.",
        egoThreat: "Uncomfortable feelings when stories aren't told according to your subjective standards.",
        egalitarianGoal: "Post-hoc narrative policing disguised as constructive feedback.",
        scores: { egalitarianIndex: 5, conflictResolution: 5, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Pause, actively listen with genuine curiosity, and let her finish her story completely. Support her narrative space by validating her voice and asking her clarifying questions in front of the group.",
        systemicImpact: "You practice active conversational peer allyship. You dismantle conversational dominance, affirming her sovereignty, voice, and authority in social environments.",
        egoThreat: "Letting go of conversational controls and the desire to dominate social attention.",
        egalitarianGoal: "Conscious supporting of she/her narrative agency inside peer groups.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l1-s3",
    title: "Unsolicited Opinions",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Physical Autonomy",
    narrative: "You catch yourself commenting on your partner's appearance, saying, 'That shirt is a bit revealing,' or suggesting she wear her hair differently. When she pushes back, you tell yourself you are just 'voicing a preference' or showing attraction.",
    question: "How do you manage your impulse to comment on or police your partner's physical appearance?",
    choices: [
      {
        id: "A",
        text: "Expect her to conform to your preference, arguing that a partner should naturally care about looking attractive to their significant other.",
        systemicImpact: "You assert aesthetic ownership over her body, reproducing patriarchal expectations of physical conformity to masculine desires.",
        egoThreat: "Ego sting when your aesthetic desires are not treated as constraints on her choices.",
        egalitarianGoal: "Beholding a partner's body as a resource for your visual approval.",
        scores: { egalitarianIndex: 1, conflictResolution: 3, boundaryResiliency: 2 }
      },
      {
        id: "B",
        text: "Get defensive and argue that you're just being 'honest,' stating that relationships require feedback and that she is being overly sensitive to simple compliments.",
        systemicImpact: "Weaponized honesty. You use 'transparency' to bypass boundaries, pathologizing her reaction to avoid taking accountability for your critical gaze.",
        egoThreat: "Frustration at your taste or feedback being rejected as an overreach.",
        egalitarianGoal: "Defending style surveillance as safe, playful feedback.",
        scores: { egalitarianIndex: 4, conflictResolution: 4, boundaryResiliency: 4 }
      },
      {
        id: "C",
        text: "Apologize and reflect on your desire to control her styling. Re-affirm: 'Your style and appearance are entirely your decisions, and my role is to respect your absolute aesthetic sovereignty.'",
        systemicImpact: "You protect her bodily and aesthetic autonomy. You recognize that her physical form is entirely sovereign, deconstructing the patriarchal assumption of partner beauty as male currency.",
        egoThreat: "Surrendering control over her choices and accepting that her look is not a reflection of your status.",
        egalitarianGoal: "Absolute respect for physical and aesthetic sovereignty.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l1-s4",
    title: "Emotional Dumping",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Emotional Labor",
    narrative: "You come home from work furious, immediately launching into a 45-minute monologue venting your anger and pacing. Your partner is clearly exhausted, but you don't stop to ask if she has the energy to hold this heavy operational space.",
    question: "How do you manage your frustration without defaulting to treating your partner as a free, infinite therapist?",
    choices: [
      {
        id: "A",
        text: "Assume she should hold this space for you because a supportive partner is 'supposed' to be a safe landing place for your anger, regardless of her energetic capacity.",
        systemicImpact: "You extract unpaid, unreciprocated emotional care. You treat your corporate or social stress as holding higher priority than her immediate boundaries and physical energy.",
        egoThreat: "Anxiety of feeling isolated with your stress if she does not immediately soothe you.",
        egalitarianGoal: "Defaulting to high-demand emotional labor extraction.",
        scores: { egalitarianIndex: 3, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "React defensively if she asks you to tone it down, arguing that if you can't vent your feelings in your own home, you have nowhere else to turn.",
        systemicImpact: "You use dramatic guilt to override boundaries. You frame her request for capacity check-in as a personal rejection, making her feel guilty for preserving her nervous system.",
        egoThreat: "Shame at being perceived as a burden or too intense for your partner.",
        egalitarianGoal: "Emotional coercion through defensive victimhood.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Stop, self-regulate, and check in first: 'I've had a brutal day and need to vent, but do you have the capacity for it right now? If not, I can take 20 minutes to self-soothe separately.'",
        systemicImpact: "You establish reciprocal emotional hygiene. You treat her emotional capacity as a finite, respected resource, modeling conscious partner communication over standard stress dumping.",
        egoThreat: "Delaying emotional gratification and taking immediate accountability for your own self-soothing.",
        egalitarianGoal: "Reciprocal capacity checks and voluntary, safe emotional sharing.",
        scores: { egalitarianIndex: 10, conflictResolution: 9, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l1-s5",
    title: "The 'Joke' Defense",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Defensive Relational Humor",
    narrative: "During a family dinner, you make a joke mocking wives nags, or make a play on how husbands need 'permission' to do simple things. Your partner does not laugh and looks uncomfortable. You feel a strong defensive urge to say, 'Oh come on, don't be so sensitive!'",
    question: "How do you handle your defensive reaction when your traditional or sexist relationship jokes are called out?",
    choices: [
      {
        id: "A",
        text: "Dismiss her concern, roll your eyes, and repeat the joke to relatives, thinking she is being hyper-sensitive and ruining a fun family atmosphere.",
        systemicImpact: "You normalize sexist marital tropes and use peer pressure to isolate her. This teaches the room that her boundaries can be publicly dismissed under the guise of 'humor.'",
        egoThreat: "Fear of looking whipped, foolish, or humorless in front of your extended family.",
        egalitarianGoal: "Preserving patriarchal bonding routines via public dismissal.",
        scores: { egalitarianIndex: 2, conflictResolution: 3, boundaryResiliency: 2 }
      },
      {
        id: "B",
        text: "Get quietly resentful, remaining silent for the rest of the dinner, feeling she is being deliberately difficult and punishing you over a harmless joke.",
        systemicImpact: "Passive withdrawal. You use emotional distance to penalize her for holding a boundary, signaling that calling out casual sexism will cost her closeness and peace.",
        egoThreat: "Stung pride at being corrected or subtly shamed in front of others.",
        egalitarianGoal: "Stonewalling to punish boundary setting.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Take immediate accountability. Apologize on the spot: 'You're right. That joke relies on lazy, sexist marital tropes of nagging wives which I do not want to normalize. I apologize.'",
        systemicImpact: "You take immediate accountability for your words. You prioritize alignment and respect over public pride, demonstrating that growth requires dismantling cozy, chauvinistic conversational defaults.",
        egoThreat: "Sallowing your pride on the spot and admitting sexist habits in front of relatives.",
        egalitarianGoal: "Immediate accountability and public standard adjustment.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l1-s6",
    title: "Public Displays of Ownership",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Sovereignty & Public Speech",
    narrative: "When introducing your partner to acquaintances, you find yourself describing her relationship to you rather than her independent identity, saying, 'This is my partner, she manages everything at home and keeps me in line!'",
    question: "How do you challenge your habit of defining your partner primarily by her domestic utility to you?",
    choices: [
      {
        id: "A",
        text: "Keep using that phrasing, thinking it's just an endearing, familiar joke that shows she is the boss at home.",
        systemicImpact: "You lock her into a traditional domestic-manager script, reducing her public social profile to how well she serves and coordinates your domestic livelihood.",
        egoThreat: "Anxiety of admitting that your cute domestic tropes are actually cages of expectation.",
        egalitarianGoal: "Normalizing service-based partner descriptions.",
        scores: { egalitarianIndex: 3, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Get annoyed if she later tells you it bothered her, arguing that it's a major compliment and she is over-analyzing simple conversational warmth.",
        systemicImpact: "Invalidating her relational pain. You use your intent ('I meant it as a compliment') to sweep away the systemic impact of placing her in a subservient domestic narrative.",
        egoThreat: "Ego threat of being categorized as patriarchally biased or old-fashioned.",
        egalitarianGoal: "Minimizing linguistic biases using favorable intents.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 4 }
      },
      {
        id: "C",
        text: "Introduce her by her name and her independent professional or personal pursuits first. Later, self-reflect on why you defaulted to defining her by her domestic assistance.",
        systemicImpact: "You affirm her independent citizenship and sovereign public sphere. You refuse to treat her existence as an accessory to your comfort or domestic execution.",
        egoThreat: "Renouncing the psychological status bump of showing off your domestic manager.",
        egalitarianGoal: "Supporting independent public sovereignty and human tracking.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l1-s7",
    title: "The Digital Privacy Boundary",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Digital Consent & Peer Bravado",
    narrative: "During a hangout with your close buddies, you feel temped to show them an intimate message or photo your partner sent you as a joke or a topic of discussion among guys, thinking, 'We share everything, it's no big deal' to show it.",
    question: "How do you uphold digital consent and privacy when tempted by peer-group bravado?",
    choices: [
      {
        id: "A",
        text: "Show the message or photo anyway, trusting your buddies won't tell and thinking it builds your male social status.",
        systemicImpact: "You violate her fundamental digital consent. You treat her intimate trust as private loot to be traded for social capital and validation in locker-room hierarchies.",
        egoThreat: "Fear of being called boring, private, or a buzzkill by your male peers.",
        egalitarianGoal: "Using her intimacy as token for masculine bonding.",
        scores: { egalitarianIndex: 1, conflictResolution: 4, boundaryResiliency: 2 }
      },
      {
        id: "B",
        text: "Show it, but feel slightly guilty, later justifying it to yourself that it wasn't that explicit and she will never find out.",
        systemicImpact: "You compartmentalize ethical behavior. You trade her dignity for peer convenience, relying on her ignorance to avoid facing the reality of your choice.",
        egoThreat: "Managing internal cognitive disconnect through secret minimization.",
        egalitarianGoal: "Secret compromises of partner trust for peer status.",
        scores: { egalitarianIndex: 4, conflictResolution: 5, boundaryResiliency: 4 }
      },
      {
        id: "C",
        text: "Recognize that her digital intimacy is a sacred, conditional trust. Keep the communication fully private, actively rejecting any peer-group expectations of sharing partners' private details.",
        systemicImpact: "You build unbreakable partner fidelity. You draw a hard boundary around her digital consent, prioritizing her absolute safety and privacy over casual peer validation.",
        egoThreat: "Resisting locker-room dynamics and establishing a separate standard of loyalty when alone with men.",
        egalitarianGoal: "Complete digital consent defense and peer limit setting.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l1-s8",
    title: "Setting the Weekend Pace",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Time Sovereignty",
    narrative: "Your partner has had a grueling, exhausting work week and needs Sunday to rest in quiet isolation. You have scheduled an all-day group social activity and expect her to join you, feeling resentful when she says she wants to stay home, worrying she is 'becoming a hermit.'",
    question: "How do you respect your partner's time sovereignty without taking her need for rest as a personal rejection?",
    choices: [
      {
        id: "A",
        text: "Grumble and pressure her to join anyway, telling her she'll have fun once she gets there and that couples should have a shared social life.",
        systemicImpact: "You deploy emotional pressure to override her bodily exhaustion. You prioritize your social convenience over her physical recovery and need for quiet space.",
        egoThreat: "Anxiety of arriving at a social gathering alone and being questioned by peers about her absence.",
        egalitarianGoal: "Forcing social conformity at the expense of vital rest.",
        scores: { egalitarianIndex: 3, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Let her stay home, but act cold, passive-aggressive, or send constant check-in messages during your outing to guilt her into feeling like she's letting you down.",
        systemicImpact: "Conditional boundaries. While complying physically, you punish her emotionally, ensuring she pays a metabolic and psychological tax for prioritizing her own rest over your wishes.",
        egoThreat: "Irritation at not having your ideal relationship representation in front of friends.",
        egalitarianGoal: "Conditional compliance with guilt markers attached.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Enthusiastically support her preference to rest. Say, 'I hope you have a wonderfully peaceful day, I'll see you tonight,' and leave her with guilt-free, sovereign time.",
        systemicImpact: "You champion her individual autonomy and nervous system safety. You disconnect her rest from your relationship validation, cultivating a mature, independent bond.",
        egoThreat: "Letting go of attachment and learning to navigate social environments comfortably as an independent entity.",
        egalitarianGoal: "Absolute time sovereignty and guilt-free autonomy support.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l1-s9",
    title: "Financial Transparency",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Financial Control",
    narrative: "You earn significantly more than your partner. When planning a relocation or major purchase, you catch yourself feeling that because you pay a larger share of the bills, you should hold veto power on final lifestyle choices.",
    question: "How do you actively dismantle financial privilege and decision-skewing as the higher earner?",
    choices: [
      {
        id: "A",
        text: "Keep the final word, believing that economic reality means the primary earner has the ultimate steering rights in the budget.",
        systemicImpact: "You replicate capitalist income disparities inside your home. This turns an intimate partnership into an economic hierarchy where votes are bought by paychecks, reducing her to a second-class resident.",
        egoThreat: "Fear of losing absolute veto control over your hard-earned financial resources.",
        egalitarianGoal: "Maintaining financial plutocracy inside your relationship.",
        scores: { egalitarianIndex: 2, conflictResolution: 4, boundaryResiliency: 2 }
      },
      {
        id: "B",
        text: "Insist on splitting everything exactly 50/50, knowing it will severely strain her budget and limit her personal luxury while keeping you comfortably loaded.",
        systemicImpact: "False equality. By enforcing absolute mathematical splitting despite income asymmetry, you lock her into structural cash starvation, forcing her to sacrifice her financial stability to meet your standards.",
        egoThreat: "Resistance to proportional bills distribution which feels like you paying for her share.",
        egalitarianGoal: "Using flat 50/50 rules to squeeze her personal cash reserve.",
        scores: { egalitarianIndex: 5, conflictResolution: 5, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Actively decouple financial contribution from decision power. Pool resources equitably based on income percentages, ensuring 50/50 equal voting weight on every choice.",
        systemicImpact: "You build non-coercive financial equality. You recognize that her domestic, emotional, or secondary labor has equal value to your paycheck, decoupling economic weight from domestic authority.",
        egoThreat: "Surrendering financial hegemony and accepting total material democracy with your partner.",
        egalitarianGoal: "Total material democracy and systemic equity adjustments.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l1-s10",
    title: "Active Affirmation",
    level: 1,
    levelName: "Level 1: Foundation",
    levelFocus: "Communication & Micro-Boundaries",
    topic: "Defensive Redirection / Fragility",
    narrative: "Whenever your partner tries to raise a concern about your behavior or an unequal dynamic in your relationship, you feel an instant, hot wave of defensiveness. Your instinct is to snap, 'Oh, so I'm the bad guy now?' or list all the good things you do to show she's being unfair.",
    question: "How do you overcome defensive redirection and learn to practice mature, egalitarian listening?",
    choices: [
      {
        id: "A",
        text: "Interfere with her feedback. Play the victim, forcing her to abandon her concern and spend the next hour comforting and reassuring you that you are a great partner.",
        systemicImpact: "You hijack the emotional space. By centering your hurt feelings, you convert her attempt to seek justice into an unpaid chore of soothing your fragile ego.",
        egoThreat: "Severe shame when your self-image as a 'great, progressive partner' is challenged by feedback.",
        egalitarianGoal: "Emotional hijacking to silences complaints.",
        scores: { egalitarianIndex: 2, conflictResolution: 4, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Listen silently but withdraw emotionally, feeling attacked and making sure she feels the cold distance of your disapproval.",
        systemicImpact: "You use stonewalling as a penalty. You establish that voicing concerns results in emotional exile, training her to swallow her feedback rather than face your ice.",
        egoThreat: "Stung ego retreating behind a wall of silence to preserve its pride.",
        egalitarianGoal: "Passive punishment of partner feedback.",
        scores: { egalitarianIndex: 5, conflictResolution: 5, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Take a deep breath, suppress your defensive ego, and say: 'I hear that my action caused you pain. I want to listen to your experience without making this about my defense. Tell me how I can do better.'",
        systemicImpact: "You prioritize her safety and relationship health over your ego defense. This allows structural adjustments to occur continuously, breaking down standard male fragility blocks.",
        egoThreat: "Voluntarily suspending your self-defense and holding space for constructive critiques of your metrics.",
        egalitarianGoal: "De-escalated democratic listening and complete accountability orientation.",
        scores: { egalitarianIndex: 10, conflictResolution: 9, boundaryResiliency: 9 }
      }
    ]
  },

  // ==========================================
  // LEVEL 2: APPLICATION (Conflict & De-escalation)
  // ==========================================
  {
    id: "l2-s1",
    title: "The In-Law Dynamic",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "External Family Pressures",
    narrative: "At a family dinner with your parents, your father makes a patronizing comment about how modern partners 'forget their place in the home'. You stay quiet and laugh off the comment, noticing your partner looking at you with distress, needing your backing.",
    question: "How do you navigate status complicity when your family exhibits sexist patterns?",
    choices: [
      {
        id: "A",
        text: "Stay quiet during dinner and resolve to just minimize visits to your family in the future to avoid any further friction.",
        systemicImpact: "By relying on private avoidance, you let the toxic status quo stand. Your partner is left unsupported in front of your family, protecting traditional patriarchies from direct challenge.",
        egoThreat: "Anxiety of confronting the built-in family hierarchy of your parents.",
        egalitarianGoal: "Preserving external calm by shrinking your presence.",
        scores: { egalitarianIndex: 3, conflictResolution: 4, boundaryResiliency: 4 }
      },
      {
        id: "B",
        text: "Wait until after you leave, then get defensive with your partner, arguing that 'there's no point in starting fights because that's just how my father is' and she shouldn't let it bother her.",
        systemicImpact: "You gaslight your partner's distress. You choose to protect your comfortable relationship with your sexist family over standing as an active, supportive ally to her sanity.",
        egoThreat: "Reluctance to carry the social strain of holding your parents accountable.",
        egalitarianGoal: "Excusing generational chauvinism to preserve family ties.",
        scores: { egalitarianIndex: 5, conflictResolution: 5, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Speak up calmly in the moment: 'Dad, we build our partnership on absolute equality, not \'places in the home.\' I don't agree with that, and we don't value that kind of feedback.'",
        systemicImpact: "An application of structural allyship. You use your status as the family insider to intercept the patriarchal comments, drawing a hard boundary that shields your partner from extended family bias.",
        egoThreat: "Exposing yourself to paternal disapproval and potential conflict with your origins.",
        egalitarianGoal: "Unified strategic alliance and hard partner accountability.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l2-s2",
    title: "Defensive Gaslighting",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "Epistemic Justice & Reality Check",
    narrative: "During an argument about a major broken promise on your part, you feel cornered and find yourself snapping: 'You are remembering it all wrong. You always twist things to look like the victim. You have serious trust issues and need help.'",
    question: "How do you check yourself when tempted to deploy epistemic distortion (gaslighting) to protect your ego?",
    choices: [
      {
        id: "A",
        text: "Keep pushing that narrative, believing that if you admit fault, you'll lose all authority and she'll lock you into being the continuous villain.",
        systemicImpact: "Total collapse of epistemic authority. You allow your cognitive weapons to hollow out her sanity, prioritizing your subjective innocence over her cognitive safety.",
        egoThreat: "Fear of losing face, feeling weak, or being held accountable for failure.",
        egalitarianGoal: "Protecting pride by undermining partner's confidence in her own memory.",
        scores: { egalitarianIndex: 1, conflictResolution: 3, boundaryResiliency: 1 }
      },
      {
        id: "B",
        text: "Stop the direct gaslighting, but transition to 'whataboutism', bringing up of her past mistakes to neutralize the current debate and call it even.",
        systemicImpact: "You engage in defensive diversion. By switching the focus, you exhaust her emotional resources arguing over older events rather than addressing the primary breach of trust.",
        egoThreat: "An intense need to avoid being the sole person at fault in the moment.",
        egalitarianGoal: "Diversionary battle tactics to avoid direct, isolated shame.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Catch your panic, pause, and retract it immediately: 'I am sorry. I realize I am gaslighting you right now because I felt cornered. I broke my promise, and your memory of it is correct. Tell me how we can repair this.'",
        systemicImpact: "You firmly uphold epistemic justice. You refuse to let your ego colonize her mind with defensive lies, demonstrating high-level de-escalation by denying yourself the easy escape of psychological manipulation.",
        egoThreat: "Willingness to lay down your defenses and stand in total, vulnerable accountability for failure.",
        egalitarianGoal: "Unyielding epistemic respect and immediate accountability containment.",
        scores: { egalitarianIndex: 10, conflictResolution: 9, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l2-s3",
    title: "Sexual Rejection",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "Sexual Sovereignty & Ego-Threat",
    narrative: "Your partner declines your intimate invitation because she is not in the mood. You feel an immediate, hot sting of rejection. Your impulse is to turn away silently, sigh loudly, sleep on the edge of the bed, and act cold and distant the next morning.",
    question: "How do you manage your sexual ego and avoid penalizing your partner's bodily autonomy with emotional withdrawal?",
    choices: [
      {
        id: "A",
        text: "Give in to your disappointment. Turn away silently and give her the cold shoulder, thinking you have a right to your feelings and can't just pretend to be happy.",
        systemicImpact: "You deploy emotional coercion. This teaches your partner that declining intimacy results in emotional punishment, subtly hacking her consent boundaries with the threat of relational exile.",
        egoThreat: "Terror of feeling undesirable, unloved, or sexually inadequate.",
        egalitarianGoal: "Using passive-aggressive distance to force physical concession.",
        scores: { egalitarianIndex: 1, conflictResolution: 4, boundaryResiliency: 1 }
      },
      {
        id: "B",
        text: "Force a fake, cheerful attitude in the moment, but later spend hours privately looking at adult content or social media models to nurse your wounded ego.",
        systemicImpact: "You compartmentalize. While avoiding immediate conflict, you build a silent resentment, replacing mutual intimacy with private, detached comparison points to avoid confronting your fragile ego.",
        egoThreat: "Stung pride seeking quick external visual validation to self-soothe.",
        egalitarianGoal: "Avoiding direct ego-struggles through compartmentalized outlet hunting.",
        scores: { egalitarianIndex: 5, conflictResolution: 5, boundaryResiliency: 4 }
      },
      {
        id: "C",
        text: "Cuddle her warmly, smile, and say: 'I understand completely, let's just relax and read or sleep.' Next morning, check in with yourself to ensure your closeness is fully unconditional.",
        systemicImpact: "You establish unconditional bodily safety. You separate her sexual choices from her relationship security, ensuring consent exists as a non-leveraged, safe choice.",
        egoThreat: "Dismantling the connection between your masculine validation and her sexual compliance.",
        egalitarianGoal: "True consent-based physical partnership and relational security.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l2-s4",
    title: "The Career Pivot",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "Career Security & Mutual Support",
    narrative: "Your partner secures an incredible, high-impact career opportunity that requires relocation or longer hours. While you claim you are happy for her, you catch yourself making passive-aggressive remarks about her 'ambition changing her' and complaining about your lost comforts.",
    question: "How do you confront your insecurity and active privilege when your partner's career expands?",
    choices: [
      {
        id: "A",
        text: "Pressure her to turn down the opportunity or reduce her hours to keep the home stable, arguing that family peace is more important than her career climb.",
        systemicImpact: "You enforce traditional gender dominance. You prioritize your comfort and career primacy, forcing her ambition to shrink to keep your masculine ego stable.",
        egoThreat: "Fear of becoming the supporting partner or losing primary breadwinner status in the eyes of peers.",
        egalitarianGoal: "Relational preservation bought via partner's shrinkage.",
        scores: { egalitarianIndex: 2, conflictResolution: 5, boundaryResiliency: 2 }
      },
      {
        id: "B",
        text: "Let her proceed, but act like a martyr. Constantly sigh about the extra chores you are doing, ensuring she feels highly guilty for her professional success.",
        systemicImpact: "You levy a 'success tax' in the home. By making her pay emotional overhead for her career development, you enforce silent dominance through guilt.",
        egoThreat: "Managing cognitive dissonance through chronic exhaustion and passive-aggressive compensation.",
        egalitarianGoal: "Tolerating her advancement while asserting leverage via domestic martyrdom.",
        scores: { egalitarianIndex: 5, conflictResolution: 5, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Initiate dialogue: 'Your growth is a major victory for our joint life. Let's actively design a plan to restructure our domestic lives so I can take on more domestic management to match your focus.'",
        systemicImpact: "You align as peer champions. You actively step into a supporting capacity, treating household structures as dynamic resources to back whichever partner is in a growth phase.",
        egoThreat: "Giving up structural comforts and holding domestic management categories.",
        egalitarianGoal: "Peer championing and systemic domestic re-allocation.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l2-s5",
    title: "The 'Help' Trap",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "Partnership Participation vs. Assisting",
    narrative: "Your partner spends all Saturday deep-cleaning the house. You sit on the couch playing video games or checking emails, occasionally calling out: 'Let me know if you need help with anything, honey!' thinking you're being a highly supportive helper.",
    question: "How do you dismantle your default 'helper' mindset and reclaim active, shared responsibility for domestic life?",
    choices: [
      {
        id: "A",
        text: "Pat yourself on the back when she assigns you a task, do it quickly, and return to the couch, feeling like a highly progressive husband.",
        systemicImpact: "You reinforce the helper privilege. You treat the cleanliness of your own home as her natural task that you are merely 'volunteering' to assist with out of kindness.",
        egoThreat: "Reluctance to interrupt your leisure time to perform unglamorous domestic maintenance.",
        egalitarianGoal: "Performing domestic labor solely as a favor to her.",
        scores: { egalitarianIndex: 3, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Get defensive if she gets upset, arguing that you're always willing to help and she just shouldn't be so dramatic about cleaning.",
        systemicImpact: "You gaslight her frustration. You turn your leisure privilege into a character debate, framing her request for co-ownership as an emotional outburst.",
        egoThreat: "Stung self-image when your comfortable laziness is labeled as systemic privilege.",
        egalitarianGoal: "Using defensiveness to protect leisure asymmetry.",
        scores: { egalitarianIndex: 4, conflictResolution: 3, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Shut down your games, stand up, and say: 'I realize I was treating you like the landlord here. This space is equally mine. Let's align on who owns what categories, and let me tackle this layout.'",
        systemicImpact: "You establish shared structural citizenship. You deconstruct helper privilege and model domestic labor as a basic constraint of cohabitation for both peers.",
        egoThreat: "Willingness to sacrifice your leisure time to hold unprompted, boring domestic duties.",
        egalitarianGoal: "Complete deconstruction of helper privilege and shared structural citizenship.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l2-s6",
    title: "Media & Triggering Content",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "Objectification vs Intimate Values",
    narrative: "You habitually consume digital media that promotes extreme objectification of women, which your partner finds highly disrespectful to her and your shared values. Your instinct is to think, 'It's just fantasy, it's my private business.'",
    question: "How do you navigate your private digital habits when they contradict the values of mutual dignity outside?",
    choices: [
      {
        id: "A",
        text: "Brush off her concerns, telling her it has nothing to do with her, and continue to consume it secretly, locking your phone.",
        systemicImpact: "You compartmentalize relational ethics. You hide your behavior behind walls of digital secrecy, valuing toxic cultural formats over her sense of trust and relational safety.",
        egoThreat: "Defensiveness of your secret habits and feeling controlled or policed.",
        egalitarianGoal: "Using digital secrecy to preserve objectification media habits.",
        scores: { egalitarianIndex: 2, conflictResolution: 4, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Get angry and call her controlling, historical, or insecure, stating that adult fantasies are normal and she has serious trust issues.",
        systemicImpact: "You turn the values debate into a pathologizing attack. You blame her emotional boundaries on personal insecurities to avoid auditing your private ethical habits.",
        egoThreat: "Facing the uncomfortable truth that your choice of online habits degrades real relational values.",
        egalitarianGoal: "Attacking her security bounds to silence the feedback.",
        scores: { egalitarianIndex: 4, conflictResolution: 3, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Acknowledge the values disconnect: 'My private choices reflect my real values. I want our partnership to be a space of complete dignity. Let's discuss where we stand on media objectification and build shared standard lines.'",
        systemicImpact: "You link private ethics to relational trust. You realize that private consumption shapes how you experience and express intimacy, demanding accountability from yourself on a values level.",
        egoThreat: "Acknowledging that your masculine default options may conflict with the deep relational safety she requires.",
        egalitarianGoal: "Co-authored relational values and ethical alignment standards.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l2-s7",
    title: "The Social Escalation",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "Hostile Public Posturing",
    narrative: "During a public gathering with your partner's coworkers, you get into a heated debate about a simple topic, rapidly raising your voice, taking a hostile posture, and intimidating her colleague.",
    question: "How do you regulate your aggressive impulses in public social settings to protect your partner's safety and professional reputation?",
    choices: [
      {
        id: "A",
        text: "Keep pushing. Raise your voice to establish dominance, thinking you are just 'being passionate' and defending your point of view.",
        systemicImpact: "You deploy toxic dominance. You humiliate your partner professionally and expose the gathering to volatile, intimidating behavior, treating your emotional trigger as higher priority than her social safety.",
        egoThreat: "Extreme dread of losing an argument or backing down in front of other men.",
        egalitarianGoal: "Social dominance at the cost of her professional standing.",
        scores: { egalitarianIndex: 3, conflictResolution: 4, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Storm out of the gathering without saying anything other than muttering your frustration, forcing her to apologize to her colleagues on your behalf.",
        systemicImpact: "You escape accountability. You rely on your partner to clean up your public mess, leaving her with the burden of explaining away your volatile emotional exits.",
        egoThreat: "Severe shame at behaving poorly, retreating to preserve your pride.",
        egalitarianGoal: "Evasive retreat leaving her with the debris.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 4 }
      },
      {
        id: "C",
        text: "Catch your escalation immediately. Take a deep breath, apologize to the colleague: 'My apologies, I let my tone get too heated. Let's step back.' Later, reflect deeply on why you felt the need to assert dominance.",
        systemicImpact: "Masterful emotional self-regulation. You dismantle volatile masculine patterns in real-time, restoring safe dialogue and protecting your partner's professional community.",
        egoThreat: "Publicly admitting your tone was wrong and surrendering the urge to have the final, loudest word.",
        egalitarianGoal: "Systems-aware biological and conversational safety.",
        scores: { egalitarianIndex: 10, conflictResolution: 10, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l2-s8",
    title: "Constructive Criticism",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "Surveillance & Micro-Control",
    narrative: "You notice yourself continuously nitpicking the exact way your partner stacks the dishwasher, folds clothes, or drafts letters, framing your critiques as 'helping her improve' or 'showing her the right way.'",
    question: "How do you distinguish constructive feedback from standard patriarchal surveillance and control?",
    choices: [
      {
        id: "A",
        text: "Keep providing the critique, believing that if things aren't done up to standard, the whole household system falls into chaos, so your correction is necessary.",
        systemicImpact: "You enforce behavioral control. You install yourself as the primary inspector of her actions, creating a high-parent/bad-child dynamic that destroys her autonomy.",
        egoThreat: "Severe irritation with processes that don't match your subjective, optimized methods.",
        egalitarianGoal: "Strict standard control wrapped in helpful words.",
        scores: { egalitarianIndex: 2, conflictResolution: 5, boundaryResiliency: 2 }
      },
      {
        id: "B",
        text: "Stop telling her directly, but redo her tasks secretly after she falls asleep to ensure the dishwasher is stacked exactly how you liked it.",
        systemicImpact: "Passive-aggressive standard-guarding. While avoiding confrontation, you still refuse to trust her execution, maintaining secret standards of domestic sovereignty.",
        egoThreat: "Panic of allowing tasks to be done sub-optimally under your watch.",
        egalitarianGoal: "Secret corrective actions to maintain absolute control.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Acknowledge the overreach: 'There are multiple valid ways to complete chores. My constant critiques are nitpicks, not instructions. I will trust your methods completely.'",
        systemicImpact: "You firmly dismantle behavioral micro-control. You assert that partners are peers of method, recognizing that trust requires relinquishing control over how standard tasks are performed.",
        egoThreat: "Relinquishing control over minor domestic styles and accepting methods you do not prefer.",
        egalitarianGoal: "Operational autonomy and equality of method.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l2-s9",
    title: "The Apology Audit",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "Accountability Codes",
    narrative: "After a painful fight where you yelled at your partner, you go to apologize and find yourself saying: 'I'm sorry things got out of hand. But you really have to learn not to push my buttons like that, because it triggers my temper.'",
    question: "How do you take authentic, unconditional accountability without shifting blame back to your partner?",
    choices: [
      {
        id: "A",
        text: "Stick with that apology, believing that if she hadn't pushed you, you wouldn't have snapped, so the blame is split 50/50.",
        systemicImpact: "You offer a conditional apology. You endorse the toxic perspective that your violent reactions are blamed on her choices, framing her boundaries as the source of your anger.",
        egoThreat: "Terror of carrying the full responsibility of emotional failure alone.",
        egalitarianGoal: "Blaming partner behavior to justify your poor self-regulation.",
        scores: { egalitarianIndex: 2, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Withdraw the explanation, but focus heavily on describing your past childhood traumas, hoping she will understand that your yelling is an automatic trauma response.",
        systemicImpact: "Using therapeutic language to escape penalty. You leverage your trauma history as a shield, making her feel guilty for holding you accountable to basic relationship safety.",
        egoThreat: "Panic of facing your current behavioral defects, using your past history to hide them.",
        egalitarianGoal: "Trauma-shielded evasion of accountability.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Clean up your apology completely: 'I own my emotional self-regulation, period. There is no excuse for my tone or my shouting, and I offer an unconditional apology without justifications.'",
        systemicImpact: "You enforce absolute accountability. You dismantle the 'pushing buttons' defense, reinforcing that mature self-regulation and physical/emotional safety are non-negotiable baselines.",
        egoThreat: "Bearing the full weight of emotional failure without the comfort of excuses or shared guilt.",
        egalitarianGoal: "Direct, unconditional accountability structures.",
        scores: { egalitarianIndex: 10, conflictResolution: 9, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l2-s10",
    title: "Exit Conversations",
    level: 2,
    levelName: "Level 2: Application",
    levelFocus: "Conflict & De-escalation",
    topic: "Safe Conflict Regulation",
    narrative: "During a debate on life plans, your voice is rising, your partner's face is tensing up, and she tells you that she is feeling intimidated and needs to pause the conversation. You feel a strong, hot trigger urge to keep pushing to solve it now.",
    question: "How do you manage your reaction when your partner exercises a conflict-regulation pause?",
    choices: [
      {
        id: "A",
        text: "Keep pushing. Raise your tone further and block her from leaving the room, stating that we need to figure this out now and she shouldn't just run from issues.",
        systemicImpact: "You commit a boundary violation. Forcing conversational compliance when her nervous system is in flight-or-fight ignores her physiological limits, normalizing high-stress intimidation.",
        egoThreat: "Severe anxiety of abandonment or leaving issues unresolved where you feel out of control.",
        egalitarianGoal: "Forced conversational compliance via structural containment.",
        scores: { egalitarianIndex: 3, conflictResolution: 3, boundaryResiliency: 4 }
      },
      {
        id: "B",
        text: "Comply silently but roll your eyes, slamming the door, and refusing to speak to her for the rest of the day, showing her your harsh silent disapproval.",
        systemicImpact: "Stonewalling. You punish her request for conversational safety with the passive-aggressive weapon of silence, ensuring she feels the heavy penalty of relational exile.",
        egoThreat: "Withdrawing behind a wall of silence to shield your ego from her boundaries.",
        egalitarianGoal: "Using silence as an active retaliatory weapon.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Agree to the pause immediately: 'Our stress levels are too high. Let's take 30 minutes to self-soothe. We will return to this at 8:00 PM with total respect.' Step into another room.",
        systemicImpact: "You observe safe de-escalation protocol. You protect both nervous systems, establish a reliable structure of return, and prioritize safety as the foundational ground of relationship democracy.",
        egoThreat: "Overcoming your biological urge to push, accepting the discomfort of temporary non-resolution.",
        egalitarianGoal: "Systems-aware biological and conversational safety.",
        scores: { egalitarianIndex: 10, conflictResolution: 10, boundaryResiliency: 10 }
      }
    ]
  },

  // ==========================================
  // LEVEL 3: ADVOCACY (Systemic Partnership)
  // ==========================================
  {
    id: "l3-s1",
    title: "The Shared Vision",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "Co-Authoring Values",
    narrative: "Your partner suggests co-authoring a shared partnership agreement to put your relationship on explicit, egalitarian standards. Your immediate reaction is to feel defensive and argue: 'Isn't our love enough? Why make our relationship so contractual?'",
    question: "How do you frame co-creation of relationship standards as a tool for peer liberation rather than control?",
    choices: [
      {
        id: "A",
        text: "Decline the draft, arguing that putting things in writing destroys the romance and shows you are treating relationship as a legal business transaction.",
        systemicImpact: "You surrender to societal entropy. Relying solely on 'natural, romantic flow' means you drift back into default cultural patterns, which inevitably land in highly gendered divisions of labor.",
        egoThreat: "Fear of being bound to explicit standards or losing comfortable, unexamined privileges.",
        egalitarianGoal: "Relying on romantic flow to avoid structural evaluations.",
        scores: { egalitarianIndex: 4, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Tell her she can write it herself, and you'll just sign whatever she puts down, thinking you are being highly supportive of her projects.",
        systemicImpact: "You outsource values work. You force her to carry 100% of the cognitive labor of relational design and writing, treating the pursuit of equality as her personal hobby rather than a joint task.",
        egoThreat: "Apathy and reluctance to spend mental energy defining relational mechanics.",
        egalitarianGoal: "Outsourcing egalitarian design labor back to her.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 6 }
      },
      {
        id: "C",
        text: "Embrace the process. Say: 'Society surrounds us with cozy, default patriarchal scripts. Let's co-author this shield explicitly so we can protect our home from ambient biases.' Designate a clear date night for it.",
        systemicImpact: "You engage in active relational engineering. You participate as a peer builder, drafting clear, transparent standards that protect your partnership from default societal roles.",
        egoThreat: "Confronting your unexamined relationship privileges and committing to clear, measurable standards.",
        egalitarianGoal: "Active, collaborative co-construction of relational infrastructure.",
        scores: { egalitarianIndex: 10, conflictResolution: 9, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l3-s2",
    title: "The Allyship Contract",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "Workplace Sexism & Active Allyship",
    narrative: "Your partner faces persistent corporate misogyny, gaslighting, or wage disparities at her workplace, leaving her completely exhausted. You listen to her vents but catch yourself offering quick, superficial advice like: 'Just try to keep your head down, or look for another job.'",
    question: "How do you pivot from superficial listening to active, system-wide partner allyship?",
    choices: [
      {
        id: "A",
        text: "Keep offering simple, solution-oriented tips, telling her she just needs to stop letting her bosses push her buttons and focus on her tasks.",
        systemicImpact: "You minimize systemic barriers. By ignoring the heavy psychological toll of sexism, you place the burden back on her, telling her that institutional bias is a personal coping issue.",
        egoThreat: "Inability to sit with systemic pain without attempting to perform a quick fix to shut down her vent.",
        egalitarianGoal: "Using quick solutions to shut down challenging conversations.",
        scores: { egalitarianIndex: 4, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Offer to call her boss or write emails on her behalf, taking matters into your own hands like a chivalric protector.",
        systemicImpact: "You replicate standard paternalistic protector dynamics. By stepping over her agency, you treat her as an incapable victim needing a heroic rescue, worsening her professional position.",
        egoThreat: "Falling back on feudal, heroic masculine scripts during moments of partner stress.",
        egalitarianGoal: "Chivalric rescue instead of cooperative allyship.",
        scores: { egalitarianIndex: 3, conflictResolution: 4, boundaryResiliency: 4 }
      },
      {
        id: "C",
        text: "Restructure your co-living system: 'I want to block out your energy drains. I will take on 70% of the domestic categories right now so you have a safe, quiet space to navigate this career battle.'",
        systemicImpact: "You implement true tactical allyship. You translate support into concrete material relief at home, taking on extra labor to offset the high metabolic price she is paying fighting sexism in public.",
        egoThreat: "Willingness to carry a disproportionate domestic load to balance external systemic inequality.",
        egalitarianGoal: "Tactical, resource-balanced systemic allyship.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l3-s3",
    title: "Parenting Without Stereotypes",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "Challenging Generational Biases",
    narrative: "You are raising children or preparing to. Your family members keep sending heavily gender-coded products (e.g., highly sparkly princess toys or aggressive combat figures) and making casual remarks like, 'Oh, boys will be boys!' Your partner wants to stand firm, but you feel uncomfortable making waves.",
    question: "How do you coordinate with your partner to shield your children from gender-stereotyped conditioning?",
    choices: [
      {
        id: "A",
        text: "Smile and use the toys anyway, telling your partner that one toy won't ruin a child and family peace is more important than being radical.",
        systemicImpact: "Systemic surrender. You allow ambient gender conditioning to run unchecked in your home, prioritizing the fragile, conservative feelings of your parents over your child's freedom to self-determine.",
        egoThreat: "Severe fear of being seen as 'overly progressive' or preachy to your family.",
        egalitarianGoal: "Surrendering to cultural default roles.",
        scores: { egalitarianIndex: 3, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Let your partner do all the confrontation, standing quietly behind her or playing the neutral peacemaker when your parents push back.",
        systemicImpact: "You force her to be the bad guy. You protect your relationships with conservative family lines, forcing your partner to carry 100% of the social penalty and isolation for holding developmental standards.",
        egoThreat: "Apathy and cowardice in addressing your family's biases directly.",
        egalitarianGoal: "Neutral fence-sitting to preserve personal comfort.",
        scores: { egalitarianIndex: 5, conflictResolution: 5, boundaryResiliency: 6 }
      },
      {
        id: "C",
        text: "Take the lead in establishing boundaries with your family: 'We are raising our kids to explore without gender templates. Please focus all gifts on neutral, open themes.' Stand in absolute alignment.",
        systemicImpact: "A profound advocacy stance. You use your role as the family insider to intercept generational conditioning, showing total, active partnership over passive compliance.",
        egoThreat: "Confronting your own family system directly and carrying the social friction yourself.",
        egalitarianGoal: "Generational boundary setting and neutral developmental spaces.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l3-s4",
    title: "Financial Equity",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "The Gender-Pay-Gap Correction",
    narrative: "Due to systemic pay gaps and societal barriers, your partner earns significantly less than you despite working identical long hours. When auditing joint finances, you notice proportional bill-splitting still leaves you with a massive personal reserve while she is squeezed for personal discretionary cash.",
    question: "How do you correct for societal gender-pay-gaps inside your own financial system?",
    choices: [
      {
        id: "A",
        text: "Keep proportional splitting exactly as is. Each partner gets to keep whatever left-over funds they earn individually.",
        systemicImpact: "You replicate capitalist exploitation inside your house. You accumulate personal wealth and investment power, while she is economically constrained, reproducing partner dependency under 'fair' math.",
        egoThreat: "Confronting capitalist defaults about 'earned money' belonging exclusively to the individual.",
        egalitarianGoal: "Maintaining market-based isolation inside love.",
        scores: { egalitarianIndex: 2, conflictResolution: 5, boundaryResiliency: 2 }
      },
      {
        id: "B",
        text: "Keep the system, but occasionally gift her nice clothes, treats, or pay for trips, telling her not to worry about the costs.",
        systemicImpact: "You cultivate a patron-client relationship. By keeping personal wealth to yourself and treating her to 'gifts,' you maintain status dominance, forcing her to rely on your charity.",
        egoThreat: "Reluctance to lose the psychological pleasure of being the 'generous benefactor' or primary protector.",
        egalitarianGoal: "Cosmetic charity over systemic economic balance.",
        scores: { egalitarianIndex: 5, conflictResolution: 7, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Establish an equity pool: all income goes into a single pot, joint bills are paid, and leftover savings are split exactly 50/50 as equal personal discretionary cash.",
        systemicImpact: "Radical economic solidarity. You neutralize external corporate gender wage gaps in your home, treating her career and relational labor as being of identical value with identical share of reward.",
        egoThreat: "Relinquishing the sense of absolute safety of 'my money' in favor of total shared team security.",
        egalitarianGoal: "Total relational economic equality and compensation of systemic gaps.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l3-s5",
    title: "Collective Boundaries",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "Protecting Relational Standards",
    narrative: "You spend an evening with a close friend couple. Throughout the night, the husband continuously makes patronizing, dismissive remarks to his wife, while you stay quiet or laugh nervously to avoid making the dinner awkward.",
    question: "How do you protect your custom relational values when socializing with traditional pairings?",
    choices: [
      {
        id: "A",
        text: "Stay quiet during the dinner. Later, complain to your partner about how terrible he was, but continue to schedule hangouts to avoid losing social circles.",
        systemicImpact: "You choose social convenience over ethical alignment. You tolerate standard misogyny, exposing your partner to toxic patterns that normalize traditional dominance.",
        egoThreat: "Fear of being labeled socially fragile or losing old friend circles.",
        egalitarianGoal: "Maintaining traditional social routines at value expense.",
        scores: { egalitarianIndex: 4, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Directly call out your friend with an aggressive, lecturing tone, trying to show off in front of the wives how much more progressive you are.",
        systemicImpact: "You perform progressive dominance. You use the call-out as a stage to boost your ego and demonstrate moral superiority, turning a real boundary issue into a masculine competition.",
        egoThreat: "Desperate need to be seen as the 'good' progressive guy to avoid any association with bias.",
        egalitarianGoal: "Performative moral signaling.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Coordinate with your partner. Calmly steer the conversation away from contempt on the spot. Later, decide as a couple: 'We will not socialize with people who treat partners with contempt.'",
        systemicImpact: "Relational ecosystem engineering. You weed out toxic, chauvinistic environments that threaten to normalize outdated hierarchies, protecting your union's environment of mutual respect.",
        egoThreat: "Pruning old relationships and facing the pain of leaving toxic social networks behind.",
        egalitarianGoal: "Environmental filter creation to safeguard relational equity.",
        scores: { egalitarianIndex: 10, conflictResolution: 9, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l3-s6",
    title: "Mentorship & Support",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "Non-Competitive Career Growth",
    narrative: "Your partner wants to make a major, high-risk career pivot (e.g., launching an activism company or going back to school) that will yield zero income for two years. This means you must cover all bills and take on extra pressure.",
    question: "How do you support your partner's radical development without triggering competitive status insecurity?",
    choices: [
      {
        id: "A",
        text: "Advise her against it. Point out the immense financial danger, suggesting she keep her stable job so the relationship doesn't struggle.",
        systemicImpact: "You choose stability over her evolution. You operate on a transactional model where her self-actualization is limited by your economic risk tolerance.",
        egoThreat: "Panic of economic instability or feeling used solely as a financial source.",
        egalitarianGoal: "Ensuring safety via partner restriction.",
        scores: { egalitarianIndex: 4, conflictResolution: 6, boundaryResiliency: 4 }
      },
      {
        id: "B",
        text: "Agree to it, but hold massive leverage over her, reminding her daily of how much you are sacrificing and expecting her to be continuously grateful and cooperative.",
        systemicImpact: "You build a financial hostage dynamic. Relational support is converted into credit, where financial backing buys moral dominance and forces submission.",
        egoThreat: "Asserting financial dominance to offset the fear of asymmetrical sacrifice.",
        egalitarianGoal: "Transactional support with relational dominance.",
        scores: { egalitarianIndex: 3, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Co-create a high-investment strategy: 'We treat our growth as a joint venture. I will fund this pivot. In exchange, you will take on the majority of domestic chores to protect my capacity.'",
        systemicImpact: "A masterful application of systemic balance. You treat relationship resources as a single, dynamic fund. You balance economic burden with domestic labor relief, preventing resentment and maintaining peer authority.",
        egoThreat: "Willingness to carry high physical and financial risk for the partner's self-actualization path.",
        egalitarianGoal: "Egalitarian resource exchange and total team investment.",
        scores: { egalitarianIndex: 10, conflictResolution: 9, boundaryResiliency: 9 }
      }
    ]
  },
  {
    id: "l3-s7",
    title: "Reframing Household Roles",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "Deconstruction of Natural Talents",
    narrative: "When talking about planning taxes, repairs, or taking care of sick relatives, you catch yourself defaulting to: 'Well, you're just naturally better at emotional coordination / handling booking / arranging repairs than I am!'",
    question: "How do you challenge your own weaponization of 'natural talents' which masks gendered defaults?",
    choices: [
      {
        id: "A",
        text: "Accept this specialize structure. Since she is indeed faster or more organized, let her manage those categories indefinitely.",
        systemicImpact: "You accept biological determinism or gendered conditioning dressed up as praise. This traps both partners in rigid, traditional tracks, limiting development.",
        egoThreat: "Giving up the status of being the 'competent' partner in those domains.",
        egalitarianGoal: "Maintaining traditional specialization.",
        scores: { egalitarianIndex: 3, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Boycott those tasks completely, creating a standoff where plumbing leaks go unfixed or schedules crash to prove you aren't doing them.",
        systemicImpact: "Tactical boycott without educational framing. This turns a debate on conditioning into a fight over negligence, leading to mutual exhaustion.",
        egoThreat: "Reacting out of sheer frustration by refusing relational maintenance.",
        egalitarianGoal: "unilateral strikes against domestic tasks.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Deconstruct the talent myth: 'These are trained skills, not gender markers. If you're better, it's because you've carried the learning burden. Let's cross-train: I will learn this category from you.'",
        systemicImpact: "You expose conditioning as learned behavior. By initiating 'cross-training', you dismantle rigid templates of marriage and develop two high-agency, multi-skilled partners.",
        egoThreat: "Confronting the work of training someone who may exhibit initial anxiety, resisting the urge to 'just do it yourself.'",
        egalitarianGoal: "Deconstructed roles and symmetric skill development.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l3-s8",
    title: "Crisis Solidarity",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "Unified Institutional Defense",
    narrative: "Your partner faces intense corporate bias or discriminatory legal attacks in her career. The pressure is immense, and legal fees are accumulating fast, threatening your joint savings and lifestyle comfort.",
    question: "How do you maintain a unified front against institutional discrimination when it threatens your safe comfort?",
    choices: [
      {
        id: "A",
        text: "Quietly urge her to settle and resign, stating that the immense stress and financial drain are destroying your relationship's security.",
        systemicImpact: "Yielding to institutional power. This isolates the partner who faces inequality, telling them the partnership treats external ethics as luxury items to be cast off in times of stress.",
        egoThreat: "Terror of economic ruin and persistent high levels of anxiety.",
        egalitarianGoal: "Preservation of family finances via submission.",
        scores: { egalitarianIndex: 4, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Support her financially, but continuously make passive, sighing remarks about the loss of cozy vacations and lifestyle assets that the legal fees cost you.",
        systemicImpact: "You provide compliance while introducing emotional guilt. This splits the team into a 'burden' and a 'victim', creating a slow-poisoning dynamic of hidden resentment.",
        egoThreat: "Coping with the sacrifice of middle-class lifestyle desires under structural crisis.",
        egalitarianGoal: "Grudging financial compliance with relational cost.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Declare complete solidarity: 'Our resources exist for justice, not just assets for comfort. We will fight this institutional attack together as a single entity, regardless of the material cost.'",
        systemicImpact: "The ultimate display of advocacy. You treat partnership as a radical refuge that stands in absolute opposition to external systemic oppression, prioritizing relational integrity and justice over capitalist comfort symbols.",
        egoThreat: "Acquiescing to material instability and shared legal risk for joint ethical principles.",
        egalitarianGoal: "Total team solidarity and absolute defense of ethics.",
        scores: { egalitarianIndex: 10, conflictResolution: 10, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l3-s9",
    title: "The Social Pivot",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "Ecosystem Restructuring",
    narrative: "You have a close group of childhood friends who frequently tell crude, sexist jokes, make dismissive remarks about women, and treat relational deceit as a badge of honor. You remain comfortable in their group chats, telling your partner, 'They are just my childhood buddies.'",
    question: "How do you challenge your complicity in sexist peer networks?",
    choices: [
      {
        id: "A",
        text: "Keep quiet in their chat but stay in the circle, thinking your private values are separate from their comments, so it doesn't affect your home life.",
        systemicImpact: "You compartmentalize relational ethics. You tolerate your partner's double life, where they act as an honorary member of of toxic circles in secret to protect their social comfort.",
        egoThreat: "Fear of being called a 'jailer' or forcing your partner to choose between you and friends.",
        egalitarianGoal: "Isolation of toxic social scripts to avoid relational friction.",
        scores: { egalitarianIndex: 4, conflictResolution: 5, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Fiercely criticize your buddies only when they enter your house, but play along and text standard jokes in the group chat when remote to protect your friendships.",
        systemicImpact: "Double-standard posturing. You claim to have clean boundaries, but your compliance when remote acts as a sponsor to the very structures of misogyny that exhaust your partner.",
        egoThreat: "Fear of being called whipped, weak, or isolated by your lifelong friends.",
        egalitarianGoal: "Performative domestic respect combined with peer conformity.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Speak up in the chat: 'That joke is garbage, let's stop talking about women like that.' If they persist, exit the group entirely. State privately: 'My ethics don't stop when I'm around other men.'",
        systemicImpact: "Profound peer advocacy. You leverage your status to disrupt male bonds of contempt, choosing the dignity of your partner and your personal integrity over shallow, comfortable group complicity.",
        egoThreat: "Confronting your partner's lack of social courage to stand up to chauvinism from their own peers.",
        egalitarianGoal: "Authentic, voluntary values alignment and peer social courage.",
        scores: { egalitarianIndex: 10, conflictResolution: 8, boundaryResiliency: 10 }
      }
    ]
  },
  {
    id: "l3-s10",
    title: "The Long-Term Alignment",
    level: 3,
    levelName: "Level 3: Advocacy",
    levelFocus: "Systemic Partnership",
    topic: "Continuous Structural Audits",
    narrative: "You recognize that long-term relationships are subject to continuous, passive societal decay. Without structured check-ins, traditional divisions, mental loads, and power imbalances slowly creep back under daily fatigue.",
    question: "How do you secure long-term egalitarian alignment against societal entropy?",
    choices: [
      {
        id: "A",
        text: "Assume everything is fine unless someone complains. 'Don't fix what is working' is the safest path.",
        systemicImpact: "Relational sleepwalking. You wait for a quiet build-up of resentment to explode in a crisis, which lets micro-inequalities establish themselves as comfortable norms before being called out.",
        egoThreat: "Fear of inviting unnecessary trouble or looking overly anxious about relationship state.",
        egalitarianGoal: "Reactive problem-solving style.",
        scores: { egalitarianIndex: 3, conflictResolution: 6, boundaryResiliency: 3 }
      },
      {
        id: "B",
        text: "Bring up complaints only during major arguments when you are already highly angry, using them as emotional bullets.",
        systemicImpact: "Using relational audits as a hostile weapon. Reviewing dynamics during high-stakes fights ensures the partner responds with absolute defense rather than collaborative system adjustments.",
        egoThreat: "releasing complaints only when emotional capacity overflows.",
        egalitarianGoal: "Unplanned structural venting.",
        scores: { egalitarianIndex: 5, conflictResolution: 4, boundaryResiliency: 5 }
      },
      {
        id: "C",
        text: "Co-create and pro-actively prep a Bi-Weekly Egalitarian Sync. Establish a dedicated 30-minute conversational container to evaluate domestic logistics, mental loads, physical boundaries, and values alignment under zero criticism.",
        systemicImpact: "The pinnacle of conscious partnership design. You construct a proactive, structural maintenance engine. You treat relationship alignment as a real, continuous process requiring deliberate design and equal management.",
        egoThreat: "Developing deep self-reflective disciplines and showing total emotional vulnerability on schedule.",
        egalitarianGoal: "Continuous, proactive relational evolution and systemic balance.",
        scores: { egalitarianIndex: 10, conflictResolution: 10, boundaryResiliency: 10 }
      }
    ]
  }
];
