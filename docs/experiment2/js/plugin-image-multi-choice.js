class jsPsychImageMultiChoice {
    constructor(jsPsych) {
        this.jsPsych = jsPsych;
    }

    trial(display_element, trial) {
        if (!trial.image || !trial.questions) {
            display_element.innerHTML = "<p style='color: red;'>ERROR: Missing parameters for image or questions.</p>";
            return;
        }

        let html = `
            <div style="display: flex; align-items: flex-start; gap: 40px; justify-content: center; max-width: 900px; margin: auto;">
                <div style="flex: 1; text-align: center;">
                    <img src="${trial.image}" alt="Comprehension Image" style="max-width: 100%; height: auto;">
                </div>
                <div style="flex: 1; display: flex; flex-direction: column; width: 100%;">
                    <p><strong>${trial.preamble}</strong></p>
                    <form id="jspsych-survey-form">
                        <div id="survey-questions"></div>
                        <button id="jspsych-next" type="submit">Continue</button>
                    </form>
                </div>
            </div>
        `;

        display_element.innerHTML = html;

        let questionHTML = "";
        trial.questions.forEach((q, index) => {
            questionHTML += `
                <div class="jspsych-survey-multi-choice-question" style="margin-bottom: 20px;">
                    <p>${q.prompt}</p>
                    ${q.options.map((option) => `
                        <label style="margin-right: 10px;">
                            <input type="radio" name="Q${index}" value="${option}" required> ${option}
                        </label>
                    `).join("")}
                </div>
            `;
        });

        document.getElementById("survey-questions").innerHTML = questionHTML;

        document.getElementById("jspsych-survey-form").onsubmit = function(e) {
            e.preventDefault();

            let responses = {};
            trial.questions.forEach((q, index) => {
                let selected = document.querySelector(`input[name="Q${index}"]:checked`);
                responses[`Q${index + 1}`] = selected ? selected.value : null;
            });

            let trial_data = { responses };
            display_element.innerHTML = "";
            jsPsych.finishTrial(trial_data);
        };
    }
}

jsPsychImageMultiChoice.info = {
    name: "image-multi-choice",
    parameters: {
        image: { pretty_name: "Image", default: null, description: "Path to the image." },
        preamble: { pretty_name: "Preamble", default: null, description: "Preamble text." },
        questions: { pretty_name: "Questions", default: [], description: "Multiple-choice questions." }
    }
};

