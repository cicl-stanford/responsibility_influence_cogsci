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
Each club's board consists of five members. The boards have agreed that a <strong>majority 
vote</strong> (at least 3 out of 5) is needed to pass each proposal.
</p>`;
const page2 = format_image_with_text('instructions/page_2.png', page2_text);

const page3_text = `
<p>
Each member votes <strong>privately</strong>.
</p>
<p>
No one sees anyone else's vote while voting.
</p>`;
const page3 = format_image_with_text('instructions/page_3.png', page3_text);

const page4_text = `
<p>
However, some club members have a <strong>mentor</strong>: someone who has been in the club longer and offers them advice. 
</p>
<p>
For example, here, Skyler gives Max advice before Max votes. This is indicated by the arrow pointing from Skyler to Max.
</p>`;
const page4 = format_image_with_text('instructions/page_4.png', page4_text);

const page5_text = `
<p>
A mentor can also guide <strong>multiple</strong> newer members who vote later.
</p>
<p>
Here, Max and London both received advice from Skyler, indicating by the arrows pointing from Skyler to each of them. 
</p>`;
const page5 = format_image_with_text('instructions/page_5.png', page5_text);

const page6_text = `
<p>
Each person's vote is shown with <img src="instructions/check_mark.png" style="display:inline-block; height:1em;"> or <img src="instructions/cross_mark.png" style="display:inline-block; height:1em;">
next to their names.
</p>
<p>
In this example, Skyler, Max, and Taylor voted for the proposal, while London and Alex voted against it. The proposal <strong>passed</strong> because the majority voted for it.
</p>`;
const page6 = format_image_with_text('instructions/page_6.png', page6_text);

const page7_text = `
<p>
The arrows show the mentorship relationships: there are arrows from Skyler (the mentor) to Max and London (the mentees). 
<p>
The mentor always gives advice that's in line with how they vote themselves. So, in this example, <strong>Skyler's advice to his mentees was to vote for the proposal</strong>.
</p>
<p>
This time, Max followed the advice and voted for the proposal, while London voted against the proposal.
</p>`;
const page7 = format_image_with_text('instructions/page_7.png', page7_text);

const page8_text = `
<p>
In this experiment, you will now see more clubs voting on proposals.
</p>
<p>
We are interested in how responsible you think certain club members are for the result.
</p>
<p>
Before we begin, let's make sure these instructions were clear. Please answer some questions about the task on the next page. You will not be able to proceed to the experiment until you have answered them all correctly.
</p>`;
const page8 = format_text_only(page8_text);

const instruction_pages = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8
];

const instruction_images = [
    'instructions/check_mark.png',
    'instructions/cross_mark.png',
    'instructions/page_2.png',
    'instructions/page_3.png',
    'instructions/page_4.png',
    'instructions/page_5.png',
    'instructions/page_6.png',
  
];

const start_prompt = `
<div style="min-height: 200px; max-width: 800px;">
    <p>Correct!</p>
    <p>
        You will now see more voting scenarios.
        We are interested in seeing how responsible you think certain members are for the proposal passing/not passing.
    </p>
    <p>
        Please do not refresh the page.
        Click the "Start" button whenever you're ready.
    </p>
</div>`;

