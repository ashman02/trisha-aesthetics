import r1 from "@/../public/images/r1.jpg"
import r2 from "@/../public/images/r2.jpg"
import r3 from "@/../public/images/r3.jpg"
import r4 from "@/../public/images/r4.jpg"
import r5 from "@/../public/images/r5.jpg"

import facial from "@/../public/images/services/facial.jpg"
import acne from "@/../public/images/services/acne.jpg"
import antiAging from "@/../public/images/services/anti-aging.jpg"
import peel from "@/../public/images/services/peel-mask.jpg"
import skinCalm from "@/../public/images/services/skin-calm.jpg"
import browShaping from "@/../public/images/services/brow-shaping.jpg"
import teenMessage from "@/../public/images/services/teen message.jpg"

const beforAndAfterImagesForHome = [r1, r2, r3, r4, r5]

const famousServicesData = [
  {
    name: "Signature Facial",
    img: facial,
  },
  {
    name: "Acne Treatment",
    img: acne,
  },
  {
    name: "Anti-Aging",
    img: antiAging,
  },
  {
    name: "Peel Mask",
    img: peel,
  },
  {
    name: "Skin Calm",
    img: skinCalm,
  },
]

const testimonialsData = [
  {
    id: 0,
    name: "Emily Smith",
    content:
      "As a full-time working mom, I barely get time to take care of my skin. Trisha recommended a routine that actually fits my schedule, and the Signature Facial made my skin glow for days! Really appreciated the personal attention and product suggestions.",
    classes: "bg-primary text-foreground",
  },
  {
    id: 1,
    name: "Ashley Wilson",
    content:
      "My sensitive skin always reacted badly to facials until I found Trisha. Her calming session made a huge difference. I adore her gentle approach and detailed aftercare guidance",
    classes: "bg-foreground text-background",
  },
  {
    id: 2,
    name: "Megan Anderson",
    content:
      "Trisha’s anti-aging treatment is incredible—she combines expertise with warmth and explains every step. I trust her for my long-term skin health, and always leave glowing and relaxed",
    classes: "bg-background text-foreground",
  },
]

const socialsData = [
  {
    name: "Instagram",
    link: "#",
  },
  {
    name: "Facebook",
    link: "#",
  },
  {
    name: "X",
    link: "#",
  },
]

const servicesData = [
  {
    id: 0,
    name: "Signature Facial",
    img: facial,
    description:
      "Experience a fresh, healthy glow—your skin feels clearer, smoother, and beautifully balanced after every tailored session.",
    price: "$35 (60 Minutes)",
  },
  {
    id: 1,
    name: "Advanced Acne Treatment",
    img: acne,
    description:
      "Break free from stubborn breakouts. Reveal clearer, calmer skin and get ongoing support to keep blemishes away.",
    price: "$45 (75 Minutes)",
  },
  {
    id: 2,
    name: "Anti-Aging Rejuvenation",
    img: antiAging,
    description:
      "Turn back the clock. Enjoy firmer, brighter skin and softer lines, restoring youthful radiance and confidence.",
    price: "$45 (60 Minutes)",
  },
  {
    id: 3,
    name: "Brightening Peel",
    img: peel,
    description:
      "See instant luminosity. Fade away dullness and dark spots, leaving your skin visibly even-toned, smooth, and glowing.",
    price: "$40 (60 Minutes)",
  },
  {
    id: 4,
    name: "Sensitive Skin Calming Session",
    img: skinCalm,
    description:
      "Soothe sensitivity fast. Calm redness and irritation, restoring comfort so your skin feels peaceful and protected.",
    price: "$25 (30 Minutes)",
  },
  {
    id: 5,
    name: "Teen Clean (For under 18)",
    img: teenMessage,
    description:
      "Build lifelong confidence! Learn clear-skin basics that fight teen breakouts, for a healthy, happy complexion.",
    price: "$22 (40 Minutes)",
  },
  {
    id: 6,
    name: "Brow Shaping & Tint",
    img: browShaping,
    description:
      "Define your look, effortlessly. Perfectly shaped, natural brows—wake up ready and feel polished every day.",
    price: "$12 (20 Minutes)",
  },
]

export {
  beforAndAfterImagesForHome,
  famousServicesData,
  testimonialsData,
  socialsData,
  servicesData,
}
