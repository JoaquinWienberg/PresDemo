import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/material';
import "./Accordion.css"

export default function SimpleAccordion() {
  return (
    <Box sx={{margin: "auto"}} className="accordion">
      <Accordion sx={{maxWidth: "600px", margin: "auto", minWidth: "500px"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{maxWidth: "600px", margin: "auto", backgroundColor:"#0077b6", color:"white", borderBottom:"white 1px solid"}}
        >
          <Typography sx={{margin: "auto"}}>GEN</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: "solid 2px #0077b6"}} >
          <Typography sx={{textAlign:"justify",  margin: "auto"}} >
                <p><CheckIcon style={{ color: '#3cb371' }} />Mayor volumen vendido  </p>
                <p><CheckIcon style={{ color: '#3cb371' }} />Mayores recuperos </p>
                <p><ClearIcon style={{ color: '#ff0000' }} />Mayores costos </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{maxWidth: "600px" , margin: "auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{maxWidth: "600px", margin: "auto", backgroundColor:"#00b4d8", color:"white", borderBottom:"white 1px solid"}}
        >
          <Typography sx={{margin: "auto"}}>PYG</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: "solid 2px #00b4d8"}}>
          <Typography sx={{textAlign:"justify"}}>
                <p><CheckIcon style={{ color: '#3cb371' }} />Mayor volumen vendido  </p>
                <p><CheckIcon style={{ color: '#3cb371' }} />Mayores recuperos </p>
                <p><ClearIcon style={{ color: '#ff0000' }} />Mayores costos </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{maxWidth: "600px" , margin: "auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{maxWidth: "600px", margin: "auto", backgroundColor:"#90e0ef", color:"white",  borderBottom:"white 1px solid"}}
        >
          <Typography sx={{margin: "auto"}}>PTQ</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: "solid 2px #90e0ef"}}>
          <Typography sx={{textAlign:"justify"}}>
                <p><CheckIcon style={{ color: '#3cb371' }} />Mayor volumen vendido  </p>
                <p><CheckIcon style={{ color: '#3cb371' }} />Mayores recuperos </p>
                <p><ClearIcon style={{ color: '#ff0000' }} />Mayores costos </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{maxWidth: "600px" , margin: "auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{maxWidth: "600px", margin: "auto", backgroundColor:"#caf0f8", color:"white",  borderBottom:"white 1px solid"}}
        >
          <Typography sx={{margin: "auto"}}>HOL</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: "solid 2px #caf0f8"}}>
          <Typography sx={{textAlign:"justify"}}>
                <p><CheckIcon style={{ color: '#3cb371' }} />Mayor volumen vendido  </p>
                <p><CheckIcon style={{ color: '#3cb371' }} />Mayores recuperos </p>
                <p><ClearIcon style={{ color: '#ff0000' }} />Mayores costos </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}