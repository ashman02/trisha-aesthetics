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
    classes : "bg-primary text-foreground"
  },
  {
    id: 1,
    name: "Ashley Wilson",
    content:
      "My sensitive skin always reacted badly to facials until I found Trisha. Her calming session made a huge difference. I adore her gentle approach and detailed aftercare guidance",
    classes : "bg-foreground text-background"
  },
  {
    id: 2,
    name: "Megan Anderson",
    content:
      "Trisha’s anti-aging treatment is incredible—she combines expertise with warmth and explains every step. I trust her for my long-term skin health, and always leave glowing and relaxed",
    classes : "bg-background text-foreground"
  },
]

const socialsData = [
  {
    name : "Instagram",
    link : "#"
  },
  {
    name : "Facebook",
    link : "#"
  },
  {
    name : "X",
    link : "#"
  }
]

export { beforAndAfterImagesForHome, famousServicesData, testimonialsData, socialsData }
