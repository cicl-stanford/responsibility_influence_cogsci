function format_image_with_text(image_file, text) {
    var page = `<div style="margin: auto; width: 90%; min-width: 400px; height: 570px;
            display: flex; align-items: center; padding: 10px;">
        <div style="width: 60%; display: flex; justify-content: center;">
            <img src="${image_file}" style="width: 90%; max-width: 570px; max-height: 570px;
                object-fit: contain; display: block;">
        </div>
        <div style="width: 40%; min-height: 300px; max-height: 570px; 
                display: flex; align-items: center; text-align: left;">
            <div style="padding: 10px;">${text}</div>
        </div>
    </div>`;
    return page;
}


function format_text_only(text) {
    var page = `<div style="margin: auto; width: 80%; min-width: 400px; max-width: 800px;
        padding: 10px; text-align: center;">
        ${text}
    </div>`;
    return page;
}

const page1_text = `
<p>
    In this experiment, you will see groups of people participating in clubs together. 
    
    
</p>
<p style="opacity: 0;">
    This is some extra filler text to balance the layout. It won't be visible but will take up space. This is to make sure the image size remains the same.
</p>`

;
const page1 = format_image_with_text('instructions/page_1.png', page1_text);

const page2_text = `
<p>
    The clubs are considering new proposals that could affect their future activities.
    Each club's board consists of five members.
    The boards have agreed that a <strong>majority vote</strong> (at least 3 out of 5)
    is needed to pass each proposal.
</p>`;
const page2 = format_image_with_text('instructions/page_2.png', page2_text);

const page3_text = `
<p>
    Most of the time, board members vote privately, and do not reveal their vote
    or see anyone else's vote.
</p>`;
const page3 = format_image_with_text('instructions/page_3.png', page3_text);

const page4_text = `
<p>
    However, sometimes, a person's vote <strong> does get revealed</strong> to
    the people voting after them.
</p>
<p>
    For example, in this scenario, Max voted before Skyler, and Skyler got to see
    Max's vote during their own turn.
</p>
<p>
    Notice how Skyler's eyes are open and the <strong>arrow is pointing from Skyler to Max</strong>.
</p>`;
const page4 = format_image_with_text('instructions/page_4.png', page4_text);

const page5_text = `
<p>
    It is also possible for a person's vote to get revealed to multiple people
    voting after them.
</p>
<p>
    Here, both Skyler and London can see Max's vote, indicated by their open
    eyes and individual arrows pointing from each of them to Max.
    However, London and Skyler don't see each other's votes.
</p>`;
const page5 = format_image_with_text('instructions/page_5.png', page5_text);

const page6_text = `
<p>
    Max was <strong>unaware</strong> that their vote would be revealed to
    London and Skyler.
</p>
<p style="opacity: 0;">
    This is some extra filler text to balance the layout. It won't be visible but will take up space. This is to make sure the image size remains the same.
</p>`;
const page6 = format_image_with_text('instructions/page_5.png', page6_text);

const page7_text = `
<p>
    However, in some scenarios, a member <strong>knows</strong> before voting
    that their vote will be revealed to some of the others who haven't voted yet.
</p>
<p>
    The <strong>thought bubble</strong> here indicates that Skyler knows that
    Alex and London will see their vote.
</p>`;
const page7 = format_image_with_text('instructions/page_7.png', page7_text);

const page8_text = `
<p>
    Each person's vote is shown with
    <img src="instructions/check_mark.png" style="display:inline-block; height:1em;">
    or
    <img src="instructions/cross_mark.png" style="display:inline-block; height:1em;">
    next to their name.
</p>
<p>
    In this example, Max and Taylor voted for the proposal, while Skyler, Alex,
    and London voted against it.
    The proposal did <b>not pass</b> because the majority voted against it.
</p>`;
const page8 = format_image_with_text('instructions/page_8.png', page8_text);

const page9_text = `
<h3 style="text-align:center"> Not Passed </h3>
<p style="text-align:center">
    How responsible are the club members below for the proposal not passing?
</p>
<div class="jspsych-html-slider-response-container" style="position:relative; float: left; width: 80%;">
    <div style="margin: 1.5em 0;">
        <div style="width: 20%; float: left; text-align: center;"> <span>Skyler:</span> </div>
        <div style="width: 70%; float: right;">
            <div style="width: 100%;" class="jspsych-html-slider-response-response" id="slider-skyler"> </div>
            <div style="display: inline-block; position: relative; left: -50%; text-align: center; width: 100%;">
                <span style="text-align: center; font-size: 80%;"> not at all </span>
            </div>
            <div style="display: inline-block; position: absolute; left: 50%; text-align: center; width: 100%;">
                <span style="text-align: center; font-size: 80%;"> very much </span>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
    <div style="margin: 2em 0;">
    <div style="width: 20%; float: left; text-align: center;"> <span>London:</span> </div>
    <div style="width: 70%; float: right;">
        <div style="width: 100%;" class="jspsych-html-slider-response-response" id="slider-skyler"> </div>
        <div style="display: inline-block; position: relative; left: -50%; text-align: center; width: 100%;">
            <span style="text-align: center; font-size: 80%;"> not at all </span>
        </div>
        <div style="display: inline-block; position: absolute; left: 50%; text-align: center; width: 100%;">
            <span style="text-align: center; font-size: 80%;"> very much </span>
        </div>
    </div>
    <div style="clear:both"></div>
</div>
    <div style="margin: 2em 0;">
        <div style="width: 20%; float: left; text-align: center;"> <span>Alex:</span> </div>
        <div style="width: 70%; float: right;">
            <div style="width: 100%;" class="jspsych-html-slider-response-response" id="slider-skyler"> </div>
            <div style="display: inline-block; position: relative; left: -50%; text-align: center; width: 100%;">
                <span style="text-align: center; font-size: 80%;"> not at all </span>
            </div>
            <div style="display: inline-block; position: absolute; left: 50%; text-align: center; width: 100%;">
                <span style="text-align: center; font-size: 80%;"> very much </span>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
</div>
<img src onerror='set_slider()'>
`;

const page9 = format_image_with_text('instructions/page_9.png', page9_text);

const page10_text = `
<p>
    Great! In this experiment, you will now see scenarios like this where five
    different club members voted on a proposal for their club.
    We'll only show you clubs that successfully passed a proposal, and
    we're interested in seeing how responsible you think certain club members
    are for the outcome in each case.
</p>
<p>
    Before we begin, let's make sure these instructions were clear.
    Please answer some questions about the task on the next page.
    You will not be able to proceed to the experiment until you have answered
    them all correctly.
</p>`;
const page10 = format_text_only(page10_text);


const instruction_pages = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10
];

const instruction_images = [
    'instructions/check_mark.png',
    'instructions/cross_mark.png',
    'instructions/page_2.png',
    'instructions/page_3.png',
    'instructions/page_4.png',
    'instructions/page_5.png',
    'instructions/page_6.png',
    'instructions/page_7.png',
    'instructions/page_8.png',
    'instructions/page_9.png',
];

const start_prompt = `
<div style="min-height: 200px; max-width: 800px;">
    <p>Correct!</p>
    <p>
        You will now see many different clubs each voting on a new proposal.
        Some proposals passed, some did not.
        In some scenarios, everyone votes independently.
        In other scenarios, one or two people can see someone else's vote before
        voting themselves.
        Remember that the arrows and open eyes indicate who is able to see who
        else's vote.
        If someone has a thought bubble, then that means they are <i>aware</i>
        of who else will be able to see their vote.
    </p>
    <p>
        Please do not refresh the page.
        Click the "Start" button whenever you're ready.
    </p>
</div>`;

