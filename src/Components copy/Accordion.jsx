import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Faq.css";
import { useState } from "react";

const faqData = [
  { id: 1, question: "How much does a new website cost?", answer: "abc" },
  {
    id: 2,
    question: "How long will it take to design my website?",
    answer: "abc",
  },
  {
    id: 3,
    question: "Do I need to provide content for my website?",
    answer: "abc",
  },
  {
    id: 4,
    question: "What if I already have a website and need improvements?",
    answer: "abc",
  },
  {
    id: 5,
    question: "What types of printing services do you offer?",
    answer: "abc",
  },
  {
    id: 6,
    question: "Can I get a sample of my print before placing a large order?",
    answer: "abc",
  },
  { id: 7, question: "Do you offer bulk order discounts?", answer: "abc" },
];

export default function AccordionExpandIcon() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      {faqData.map(({ id, question, answer }) => (
        <Accordion
          key={id}
          expanded={openSection === id}
          onChange={() => toggleSection(id)}
          className="accordion_border"
        >
          <AccordionSummary
            expandIcon={
              openSection === id ? <ArrowDownwardIcon /> : <ArrowDropDownIcon />
            }
            aria-controls={`panel${id}-content`}
            id={`panel${id}-header`}
            className="accordion_bg"
          >
            <Typography><h6>{question}</h6></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography><p>{answer}</p></Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
