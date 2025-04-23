import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  tabs: String;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };

  const ComponentToRender = (props: any) => {
    const { value, tabs, pageState } = props;
    const TabDetails: any = tabs[value]?.moduleName;
    return TabDetails ? (
      <TabDetails pageState={pageState} />
    ) : (
      <div>Page not found</div>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {Array.isArray(props.tabs) &&
            props.tabs.length > 0 &&
            props.tabs.map((tabDetails: any, index: number) => {
              return <Tab label={tabDetails.tabName} {...a11yProps(index)} />;
            })}
        </Tabs>
      </Box>
      <Box>
        <ComponentToRender
          tabs={props.tabs}
          value={value}
          pageState={props.pageState}
        />
      </Box>
    </Box>
  );
}
