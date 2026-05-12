import { 
  ShieldCheck, 
  Sparkles, 
  Clock8, 
  Droplet, 
  Waves, 
  Sun,
  Beaker,
  Zap
} from 'lucide-react';

export const treatments = [
  {
    id: "acne-treatment",
    name: "Acne Treatment",
    slug: "acne-treatment",
    tagline: "Clear skin, confident you",
    description: "Advanced clinical solutions targeting the root causes of acne for lasting clarity.",
    whatIsIt: "Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples.",
    causes: ["Hormonal changes", "Excess oil production", "Bacterial growth", "Stress & Lifestyle"],
    fullDescription: "Our clinical acne treatment goes beyond surface-level care. We use a combination of advanced extractions, medical-grade peels, and light therapy to target the root causes of acne. Whether you suffer from cystic acne, hormonal breakouts, or occasional congestion, our specialists will customize a plan to restore your skin's health and prevent future scarring.",
    theProcess: [
      "Skin Analysis & Consultation",
      "Deep Pores Cleansing",
      "Professional Extractions",
      "Targeted Chemical Peel / Laser",
      "Aftercare & Protection"
    ],
    duration: "30–60 min per session",
    results: "Visible results in 4–6 weeks",
    precautions: [
      "Avoid direct sun exposure",
      "Use broad-spectrum sunscreen daily",
      "Follow doctor's post-care advice"
    ],
    benefits: ["Clear and healthy skin", "Reduced active pimples", "Controlled oil production", "Minimized acne scarring"],
    icon: ShieldCheck,
    color: "bg-[#FFF0F5]", 
    iconColor: "text-[#D87D90]",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
    beforeAfterGallery: [
      "https://shlokdermatology.com/wp-content/uploads/2025/11/Acne-Marks.webp",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "glow-facial",
    name: "Glow Facial",
    slug: "glow-facial",
    tagline: "Unveil your natural radiance",
    description: "Nutrient-rich facial treatment designed to instantly restore your skin's natural radiance.",
    whatIsIt: "The Glow Facial is a signature skin rejuvenation treatment that uses medical-grade serums and gentle exfoliation to restore a healthy, lit-from-within complexion.",
    fullDescription: "Experience the ultimate skin rejuvenation with our signature Glow Facial. This multi-step process includes deep cleansing, enzymatic exfoliation, and a specialized antioxidant infusion that instantly restores vibrancy to dull, tired skin. Perfect for special occasions or regular maintenance, it leaves your complexion luminous, smooth, and deeply nourished.",
    theProcess: [
      "Double Cleansing",
      "Enzymatic Exfoliation",
      "Facial Massage with Essential Oils",
      "Antioxidant Serum Infusion",
      "Hydrating Jelly Mask",
      "Oxygen Mist Finish"
    ],
    duration: "45–60 min per session",
    results: "Instant glow, peaks in 24h",
    precautions: [
      "Hydrate well before and after",
      "Avoid heavy makeup for 24 hours",
      "Apply daily sunscreen"
    ],
    benefits: ["Instant radiance boost", "Smooths skin texture", "Infuses vital antioxidants", "Deeply relaxing experience"],
    icon: Sparkles,
    color: "bg-[#FFFBF2]",
    iconColor: "text-[#D4C1A5]",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80",
    beforeAfterGallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "anti-aging-care",
    name: "Anti-Aging Care",
    slug: "anti-aging-care",
    tagline: "Timeless beauty for every age",
    description: "Firming peptide therapy and modern dermatology to rejuvenate mature skin.",
    whatIsIt: "Anti-Aging Care is a comprehensive treatment designed to boost collagen production, firm the skin, and reduce the appearance of fine lines through advanced peptide therapy.",
    fullDescription: "Our Anti-Aging Care protocol combines the best of science and luxury. We utilize high-concentration peptide serums, micro-current technology, and collagen-stimulating treatments to firm sagging skin and soften the appearance of fine lines and wrinkles. Our goal is to enhance your natural beauty while promoting long-term skin resilience and elasticity.",
    theProcess: [
      "Firming Consultation",
      "Micro-current Lifting",
      "Peptide Infusion",
      "Collagen Boosting Mask",
      "RF Skin Tightening",
      "Regenerative Cream Application"
    ],
    duration: "60–90 min per session",
    results: "Best after 3–5 sessions",
    precautions: [
      "Avoid retinol 3 days prior",
      "Stay hydrated",
      "Maintain a consistent homecare routine"
    ],
    benefits: ["Firms and lifts skin", "Reduces fine lines", "Boosts collagen production", "Improves elasticity"],
    icon: Clock8,
    color: "bg-[#F8F4FF]",
    iconColor: "text-[#9B89B3]",
    image: "https://images.unsplash.com/photo-1590159763121-7c9ff3121ef0?auto=format&fit=crop&q=80",
    beforeAfterGallery: [
      "https://images.unsplash.com/photo-1590159763121-7c9ff3121ef0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "pigmentation-treatment",
    name: "Pigmentation Treatment",
    slug: "pigmentation-treatment",
    tagline: "Even tone, radiant glow",
    description: "Targeted brightening agents to fade dark spots and achieve an even skin tone.",
    whatIsIt: "Pigmentation Treatment targets melanin clusters in the skin to fade dark spots, melasma, and sun damage for a more uniform and clear complexion.",
    fullDescription: "Tackle uneven skin tone and sun damage with our precision pigmentation therapy. Using a blend of laser technology and medical-grade brightening agents, we target melanin clusters to fade dark spots, melasma, and hyperpigmentation. This treatment not only clarifies your current complexion but also inhibits future pigment formation for long-lasting clarity.",
    theProcess: [
      "Melanin Analysis",
      "Brightening Peel",
      "Laser Spot Treatment",
      "Vitamin-C Infusion",
      "Depigmenting Mask",
      "Sun Protection Layer"
    ],
    duration: "45–60 min per session",
    results: "Gradual fading over 4–8 weeks",
    precautions: [
      "Strict sun protection is mandatory",
      "Avoid peak sun hours for 1 week",
      "Apply depigmenting serum as directed"
    ],
    benefits: ["Fades dark spots", "Evens out skin tone", "Treats sun damage", "Brightens complexion"],
    icon: Droplet,
    color: "bg-[#F0F9FF]",
    iconColor: "text-[#7FB3D5]",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80",
    beforeAfterGallery: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "hydration-therapy",
    name: "Hydration Therapy",
    slug: "hydration-therapy",
    tagline: "Deep hydration for dewy skin",
    description: "Deep moisture infusion for a plump, healthy, and dewy complexion.",
    whatIsIt: "Hydration Therapy is an intensive moisture-locking treatment that uses hyaluronic acid and cellular-level infusion to treat dry, dehydrated skin.",
    fullDescription: "Quench your skin's thirst with our intensive Hydration Therapy. This treatment uses hyaluronic acid infusion and moisture-locking masks to deliver deep hydration to the cellular level. Ideal for dry, dehydrated, or sensitive skin, it restores the moisture barrier and leaves your face feeling incredibly soft, plump, and dewy with a healthy glow.",
    theProcess: [
      "Hydration Level Test",
      "Steam & Gentle Cleanse",
      "Hyaluronic Acid Infusion",
      "Electroporation for Deep Absorption",
      "Sheet Mask with Cooling Therapy",
      "Barrier Repair Moisturizer"
    ],
    duration: "45 min per session",
    results: "Immediate plumping effect",
    precautions: [
      "Avoid hot saunas for 24 hours",
      "Drink at least 2L of water daily",
      "Use moisturizing serum nightly"
    ],
    benefits: ["Deeply hydrates", "Plumps skin volume", "Restores moisture barrier", "Relieves dryness"],
    icon: Waves,
    color: "bg-[#F0FFF4]",
    iconColor: "text-[#82B391]",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
    beforeAfterGallery: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "skin-brightening",
    name: "Skin Brightening",
    slug: "skin-brightening",
    tagline: "Illuminate your inner beauty",
    description: "Powerful Vitamin-C infusion to illuminate dull skin and enhance luminosity.",
    whatIsIt: "Skin Brightening uses potent antioxidants and Vitamin-C to neutralize free radicals and instantly brighten sallow or tired-looking skin.",
    fullDescription: "Illuminate your skin from within with our Vitamin-C based Skin Brightening treatment. We use a powerful combination of pure L-ascorbic acid and botanical extracts to neutralize free radicals and instantly brighten the complexion. This treatment is perfect for anyone looking to combat dullness and achieve a uniform, luminous skin tone with a 'lit-from-within' effect.",
    theProcess: [
      "Luminosity Assessment",
      "Double Cleansing",
      "Brightening Exfoliation",
      "Pure Vitamin-C Infusion",
      "Light Therapy for Absorption",
      "Illuminating SPF Finish"
    ],
    duration: "60 min per session",
    results: "Brighter skin in 2–4 weeks",
    precautions: [
      "Wear SPF 50 daily",
      "Avoid strong acid peels for 3 days",
      "Maintain a Vitamin-C rich skincare routine"
    ],
    benefits: ["Neutralizes free radicals", "Enhances skin luminosity", "Promotes uniform tone", "High Vitamin-C infusion"],
    icon: Sun,
    color: "bg-[#FFF9F0]",
    iconColor: "text-[#E6B17A]",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80",
    beforeAfterGallery: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "chemical-peel",
    name: "Chemical Peel",
    slug: "chemical-peel",
    tagline: "Renew your skin's surface",
    description: "Medical-grade exfoliation to reveal smoother, younger-looking skin.",
    whatIsIt: "A Chemical Peel is a clinical technique used to improve and smooth the texture of the skin by removing the outermost layers of dead skin cells.",
    fullDescription: "Our medical-grade Chemical Peels are designed to address a variety of skin concerns, from fine lines and wrinkles to acne scars and uneven pigmentation. By carefully applying a specialized solution, we trigger a controlled exfoliation process that reveals the fresh, vibrant skin beneath. Each peel is tailored to your skin's sensitivity and desired results.",
    theProcess: [
      "Skin Prep & Degreasing",
      "Peel Solution Application",
      "Neutralization Process",
      "Soothing Bio-Cellulose Mask",
      "Hydration & Barrier Repair",
      "Post-Peel SPF Application"
    ],
    duration: "30–45 min per session",
    results: "Refined texture in 7–10 days",
    precautions: [
      "Strictly avoid sun for 1 week",
      "Do not pick or peel any flaking skin",
      "Skip active ingredients like Retinol"
    ],
    benefits: ["Smoother skin texture", "Reduced fine lines", "Minimized pore appearance", "Balanced skin tone"],
    icon: Beaker,
    color: "bg-[#F5F5F5]",
    iconColor: "text-[#666666]",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80",
    beforeAfterGallery: [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "laser-resurfacing",
    name: "Laser Resurfacing",
    slug: "laser-resurfacing",
    tagline: "Precision skin transformation",
    description: "Advanced laser technology to target deep wrinkles and structural skin issues.",
    whatIsIt: "Laser Skin Resurfacing uses concentrated beams of light to remove skin layer by layer with precision, stimulating new collagen growth.",
    fullDescription: "Transform your skin with our state-of-the-art Laser Resurfacing treatment. This high-precision procedure targets deep structural issues, including stubborn wrinkles, deep acne scars, and significant sun damage. By stimulating the body's natural healing response, it promotes the growth of new, healthy skin cells and collagen for a dramatically smoother and younger appearance.",
    theProcess: [
      "Numbing Cream Application",
      "Precision Laser Mapping",
      "Targeted Energy Delivery",
      "Cooling & Calming Therapy",
      "Regenerative Ointment",
      "Intensive Aftercare Briefing"
    ],
    duration: "45–90 min per session",
    results: "Full transformation in 3–6 months",
    precautions: [
      "Plan for 3-5 days of downtime",
      "Apply healing ointment as directed",
      "Absolute sun avoidance for 2 weeks"
    ],
    benefits: ["Deep wrinkle reduction", "Scar revision", "Structural skin firming", "Long-term rejuvenation"],
    icon: Zap,
    color: "bg-[#FEF2F2]",
    iconColor: "text-[#EF4444]",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
    beforeAfterGallery: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    ]
  }
];
