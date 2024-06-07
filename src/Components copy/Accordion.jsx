import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Faq.css";
import { useState } from "react";

export default function AccordionExpandIcon() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <Accordion expanded={openSection === 1} onChange={() => toggleSection(1)} className="accordion_border">
        <AccordionSummary
          expandIcon={
            openSection === 1 ? <ArrowDownwardIcon /> : <ArrowDropDownIcon />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordion_bg"
        >
          <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
            How much does a new website cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={openSection === 2} onChange={() => toggleSection(2)} className="accordion_border">
        <AccordionSummary
          expandIcon={
            openSection === 2 ? <ArrowDownwardIcon /> : <ArrowDropDownIcon />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
            How long will it take to design my website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={openSection === 3} onChange={() => toggleSection(3)} className="accordion_border">
        <AccordionSummary
          expandIcon={
            openSection === 3 ? <ArrowDownwardIcon /> : <ArrowDropDownIcon />
          }
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
            Do I need to provide content for my website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={openSection === 4} onChange={() => toggleSection(4)} className="accordion_border">
        <AccordionSummary
          expandIcon={
            openSection === 4 ? <ArrowDownwardIcon /> : <ArrowDropDownIcon />
          }
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
            What if I already have a website and need improvements?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={openSection === 5} onChange={() => toggleSection(5)} className="accordion_border">
        <AccordionSummary
          expandIcon={
            openSection === 5 ? <ArrowDownwardIcon /> : <ArrowDropDownIcon />
          }
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
            What types of printing services do you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={openSection === 6} onChange={() => toggleSection(6)} className="accordion_border">
        <AccordionSummary
          expandIcon={
            openSection === 6 ? <ArrowDownwardIcon /> : <ArrowDropDownIcon />
          }
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
            Can I get a sample of my print before placing a large order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={openSection === 7} onChange={() => toggleSection(7)} className="accordion_border">
        <AccordionSummary
          expandIcon={
            openSection === 7 ? <ArrowDownwardIcon /> : <ArrowDropDownIcon />
          }
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
            Do you offer bulk order discounts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
