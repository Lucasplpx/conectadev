import { Box, Container, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import { useState } from 'react';
import AccountProfile from './AccountProfile';
import Connections from './Connections';
import Posts from './Posts';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`a11y-tabpanel-${index}`}
      aria-labelledby={`a11y-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Profile() {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (  
    <Container maxWidth="lg">
      <Grid spacing={4}>
        <Grid item md={4} xs={12}>
          <AccountProfile />
        </Grid>
        <Grid item md={8} xs={12}>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="Post" />
            <Tab label="Conexões" />
          </Tabs>

          <TabPanel value={tab} index={0}>
            <Posts />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Connections />
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
