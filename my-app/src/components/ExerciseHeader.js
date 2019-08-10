import React from 'react';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExerciseHeader = props => (
<>
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h2" gutterBottom> 
          <i className = {props.faIcon} ></i>&nbsp;
          Exercise {props.number} - {props.title}
        </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        {props.children}
      </Typography>
    </ExpansionPanelDetails>

  </ExpansionPanel>
  <Typography style={{float:'right'}} variant='caption'>Updated {props.update.time}</Typography>
</>
);

ExerciseHeader.defaultProps = {
  number:0, 
  title:'Default exercise', 
  faIcon: 'fas fa-user-edit', 
  update : {
    date: new Date().toLocaleDateString(), 
    time: new Date().toLocaleTimeString()
  }
}

export default ExerciseHeader;