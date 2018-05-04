import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class ControlledForm extends Component {
    state = {
        finished: false,
        stepIndex: 0
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    disableTouchRipple
                    disableFocusRipple
                    primary
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple
                        disableFocusRipple
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        const { stepIndex } = this.state;

        return (
            <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>
                            <h2>Add an Image</h2>
                        </StepLabel>
                        <StepContent>
                            <p>
                                We live in a visual culture. Upload an image of
                                the item you are sharing
                            </p>
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>
                            <h2>Add a Title and Description</h2>
                        </StepLabel>
                        <StepContent>
                            <p>
                                Folks need to know what you are sharing. Give
                                them a clue by adding a title & description.
                            </p>
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>
                            <h2>Categorize Your Item</h2>
                        </StepLabel>
                        <StepContent>
                            <select name="Categorize Your Item" id="">
                                <option selected="selected" disabled="disabled">
                                    Select a Category
                                </option>
                                <option value="tag1">
                                    Musical Instruments
                                </option>
                                <option value="tag2">Household Items</option>
                                <option value="tag3">Tools</option>
                                <option value="tag4">Physical Media</option>
                                <option value="tag5">Electronics</option>
                                <option value="tag6">Sporting Goods</option>
                                <option value="tag7">
                                    Recreational Equipment
                                </option>
                            </select>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>
                            <h2>Confirm Things!</h2>
                        </StepLabel>
                        <StepContent>
                            <p>
                                Great! If you are happy with everything, tap the
                                button.
                            </p>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        );
    }
}

export default ControlledForm;
