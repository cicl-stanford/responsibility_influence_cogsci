var jsPsychResponsibility = (function (jspsych) {
  'use strict';

  const info = {
      name: "responsibility",
      parameters: {
          trial: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Trial",
              default: 0
          },
          title: {
              type: jspsych.ParameterType.STRING,
              pretty_name: 'Title',
              default: ''
          },
          outcome: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Outcome",
              default: ''
          },
          description: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Description",
              default: null
          },
          people: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "People",
              default: null,
              array: true
          }
      },
  };
  class ResponsibilityPlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }
      trial(display_element, trial) {
          let slider_labels = ["not at all", "very much"];
          let description = (trial.description) ? `<p>${trial.description}</p>` : '';
          let outcome_text = trial.outcome.toLowerCase().slice(0, -2) + "ing";

          // display
          let html = `<h3> ${trial.title} </h3>
              <div style="margin: auto; width: 90%; min-width: 400px; height: 570px;
                  display: flex; padding: 10px;">
              <div style="width: 60%;">
                  <img src="trials/${trial.trial}.png" style="width: 100%; height: auto;
                      max-height: 570px; max-width: 570px; object-fit: cover; display: block;">
              </div>
              <div style="width: 40%;">
                  <h3> ${trial.outcome} </h3>
                  ${description}
                  <p> How responsible are these gears for the surprise popping up? </p>
                  <div class="jspsych-html-slider-response-container" style="position:
                      relative; float: left; width: 90%;">`;
          // Helper function to generate gear image tag
          function generateGearImage(letter, trialNum, size = 60) {
              return `<img src="gears/trial_${trialNum}/${letter}.png" alt="Gear ${letter}" style="width: ${size}px; height: ${size}px; margin-top: -5px;">`;
          }

          for (var i=0; i<trial.people.length; i++) {
              html += `<div style="margin: 1.5em 0;">
                  <div style="width: 20%; float: left; text-align: center; display: flex; align-items: center; justify-content: center;">
                      ${generateGearImage(trial.people[i], trial.trial)}
                  </div>
                  <div style="width: 70%; float: right;">
                      <div style="width: 100%;" class="jspsych-html-slider-response-response"
                          id="slider-${trial.people[i]}">
                      </div>
                      <div style="display: inline-block; position: relative; left: -50%;
                          text-align: center; width: 100%;">
                          <span style="text-align: center; font-size: 80%;"> not at all </span>
                      </div>
                      <div style="display: inline-block; position: absolute; left: 50%;
                          text-align: center; width: 100%;">
                          <span style="text-align: center; font-size: 80%;"> very much </span>
                      </div>
                  </div>
                  <div style="clear: both"></div>
              </div>`;
          }
          html += '</div> </div> </div>';
          html += `<button id="jspsych-html-slider-response-next" style="margin: 0 1em 2em;"
              class="jspsych-btn" disabled> Continue </button>`;

          display_element.innerHTML = html;

          let response = {};

          set_slider();

          $("#jspsych-html-slider-response-next").click(function() {
              for(var i=0; i<trial.people.length; i++) {
                  response[trial.people[i]] = $('#slider-'+trial.people[i]).slider('option', 'value');
              }
              end_trial();
          });
          
          // function to end trial when it is time
          const end_trial = () => {
              // kill any remaining setTimeout handlers
              this.jsPsych.pluginAPI.clearAllTimeouts();
              // gather the data to store for the trial
              let trial_data = {
                  trial: trial.trial,
                  response: response
              };
              // clear the display
              display_element.innerHTML = "";
              // move on to the next trial
              this.jsPsych.finishTrial(trial_data);
          };

      }
  }
  
  ResponsibilityPlugin.info = info;

  return ResponsibilityPlugin;

})(jsPsychModule);
