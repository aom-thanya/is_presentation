import type { PresentationDefinition } from "../types/presentation";

export const presentationData: PresentationDefinition = {
  id: "influencer-hub-pitch",
  title: "Influencer Campaign Data Hub",
  scenes: [
    {
      id: "cover",
      title: "Cover",
      totalSteps: 4,
      presenterNote: "Minimal cover scene revealing the core project tagline."
    },
    {
      id: "slide1-business-problem",
      title: "Business Problem",
      totalSteps: 22,
      presenterNote: "Pain ของแต่ละทีมดูเหมือนเป็นคนละเรื่อง แต่จริง ๆ มี Root Cause เดียวกัน คือทุกครั้งที่ข้อมูลถูกส่งต่อ คนต้องสร้างความเข้าใจใหม่จากข้อมูลเดิม"
    },
    {
      id: "slide2-personas",
      title: "Persona & Voice of Customer",
      totalSteps: 26,
      presenterNote: "This scene has 4 phases: Overview (0), Sales (1-8), Buyer (9-16), Planner (17-24), PM/Ops (25)."
    },
    {
      id: "slide3-value-mapping",
      title: "From Voice of Customer to Product Value",
      totalSteps: 30,
      presenterNote: "Business Outcome เชิงปริมาณจะถูกวัดจาก User Validation ไม่ใช้ตัวเลขสมมติเป็นผลลัพธ์ล่วงหน้า"
    },
    {
      id: "slide4-solution-design",
      title: "Solution Design",
      totalSteps: 28,
      presenterNote: "Campaign Data is created once and reused across multiple outputs."
    },
    {
      id: "slide5-live-walkthrough",
      title: "Live Product Walkthrough",
      totalSteps: 12,
      presenterNote: "Presenter runs the interactive prototype embedded in the right panel."
    },
    {
      id: "slide6-validation-design",
      title: "Validation Design",
      totalSteps: 17,
      presenterNote: "Do not show any fake validation results. This slide explains the validation framework only."
    },
    {
      id: "slide7-feature-test-cases",
      title: "Feature Test Cases",
      totalSteps: 6,
      presenterNote: "Interactive browser. Press Esc to close a test case without advancing."
    },
    {
      id: "slide8-roadmap",
      title: "IS Roadmap",
      totalSteps: 12,
      presenterNote: "Explore the 3-phase roadmap."
    },
    {
      id: "slide9-closing",
      title: "Closing",
      totalSteps: 10,
      presenterNote: "One Campaign. One Data. One Source of Truth."
    }
  ]
};
