var React = require('react');
var render = require('react-dom').render;
var testDialog = require('rgaa-test-suite').dialog;
var Modal = require('react-modal');



/**
 *
 */
function dialogFactory(options) {
	var open;
	var close;

	var Dialog = React.createClass({

		getInitialState() {
			return {
				show: false
			};
		},

		componentDidMount() {
			open = this.handleShow;
			close = this.handleHide;
		},

		handleShow() {
			this.setState({
				show: true
			});
		},

		handleHide() {
			this.setState({
				show: false
			});
		},

		render() {
			return (
				<Modal
					isOpen={this.state.show}
					onRequestClose={this.handleHide}
					contentLabel={options.title}
					role="dialog"
				>
					<h1>{options.title}</h1>
					<p>{options.content}</p>
				</Modal>
			);
		}
	});

	var node = document.createElement('div');
	//document.body.appendChild(node);

	render(<Dialog />, node);

	return {
		open: open,
		close: close
	};
}

/**
 *
 */
describe(
	'React Modal',
	testDialog(dialogFactory)
);
