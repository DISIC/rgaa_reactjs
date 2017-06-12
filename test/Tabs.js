var React = require('react');
var render = require('react-dom').render;
var testTabPanel = require('rgaa-test-suite').tabPanel;
var ReactTabs = require('react-tabs');
var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;



/**
 *
 */
function tabPanelFactory(options) {
	var node = document.createElement('div');
	var selected = options.panels.findIndex(function(panel) {
		return panel.selected === true;
	});

	render((
		<Tabs selectedIndex={selected}>
			<TabList>
				{options.panels.map(function(panel, i) {
					return <Tab key={i}>{panel.title}</Tab>;
				})}
			</TabList>

			{options.panels.map(function(panel, i) {
				return (
					<TabPanel key={i}>
						<p dangerouslySetInnerHTML={{
							__html: panel.content
						}} />
					</TabPanel>
				);
			})}
		</Tabs>
	), node);

	return node;
}

/**
 *
 */
describe(
	'React Tabs',
	testTabPanel(tabPanelFactory)
);
