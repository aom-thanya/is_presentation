import type { PresentationDefinition } from "../types/presentation";

export const presentationData: PresentationDefinition = {
  id: "influencer-hub-pitch",
  title: "Influencer Campaign Data Hub",
  scenes: [
    {
      id: "cover",
      title: "Cover",
      totalSteps: 1,
      presenterNote: "Minimal cover scene revealing the core project tagline."
    },
    {
      id: "slide1-business-problem",
      title: "Business Problem",
      totalSteps: 1,
      presenterNote: "Pain ของแต่ละทีมดูเหมือนเป็นคนละเรื่อง แต่จริง ๆ มี Root Cause เดียวกัน"
    },
    {
      id: "slide2-personas",
      title: "Persona & Voice of Customer",
      totalSteps: 1,
      presenterNote: "Persona and Pain Points"
    },
    {
      id: "slide3-value-mapping",
      title: "From Voice of Customer to Product Value",
      totalSteps: 1,
      presenterNote: "Value Mapping"
    },
    {
      id: "slide4-solution-design",
      title: "Solution Design",
      totalSteps: 1,
      presenterNote: "Solution Design"
    },
    {
      id: "slide5-live-walkthrough",
      title: "Live Walkthrough",
      totalSteps: 1,
      presenterNote: "Live Prototype Walkthrough"
    },
    {
      id: "slide5-validation-design",
      title: "Validation & Test Cases",
      totalSteps: 1,
      presenterNote: "Validation Design and Feature Test Cases"
    },
    {
      id: "slide6-roadmap",
      title: "Roadmap & Closing",
      totalSteps: 1,
      presenterNote: "Project Roadmap and Closing Statement"
    }
  ]
};
