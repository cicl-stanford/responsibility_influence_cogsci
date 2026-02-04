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
    In this experiment, you will examine the inner workings of toy boxes. 
    
    
</p>
<p style="opacity: 0;">
    This is some extra filler text to balance the layout. It won't be visible but will take up space. This is to make sure the image size remains the same.
</p>`

;
const page1 = format_image_with_text('instructions/page_1.png', page1_text);

const page2_text = `
<p>
    
The inner mechanism of each toy box consists of five gears, ranging from A to E. 


</p>`;
const page2 = format_image_with_text('instructions/page_2.png', page2_text);

const page3_text = `
<p>
The box will open and reveal a surprise if at <strong>least three gears</strong> are spinning at the same time. 

</p>`;
const page3 = format_image_with_text('instructions/page_3.png', page3_text);

const page4_text = `
<p>
In some toy boxes, the gears spin <strong>independently</strong>: whether one gear is spinning does not affect the other gears.
</p>`;
const page4 = format_image_with_text('instructions/page_4.png', page4_text);

const page5_text = `
<p>
    
In other toy boxes, gears can influence each other. 
For example, here, <strong>Gear A affects Gear D</strong>. This is indicated by the arrow pointing from A to D.
</p>`;
const page5 = format_image_with_text('instructions/page_5.png', page5_text);

const page6_text = `
<p>
It's also possible for one gear to affect multiple gears. For instance, here, <strong>Gear E affects both Gear A and Gear C</strong>.
</p>`;
const page6 = format_image_with_text('instructions/page_6.png', page6_text);

const page7_text = `
<p>
After you turn on a toy box, you will see which gears are spinning:

Spinning gears will be marked with <img src="instructions/check_mark.png" style="display:inline-block; height:1em;">.
Non-spinning gears will be marked with  <img src="instructions/cross_mark.png" style="display:inline-block; height:1em;">.

</p>`;
const page7 = format_image_with_text('instructions/page_7.png', page7_text);

const page8_text = `
<p>
At least three gears must be spinning for the surprise in the box to pop up. 

</p>
<p>
In this case, Gear A, B, E are spinning, a surprise pops up!
</p>`;
const page8 = format_image_with_text('instructions/page_8.png', page8_text);

// const page9_text = `
// <h3 style="text-align:center"> A Surprise pops up!</h3>
// <p style="text-align:center">
// How responsible are these gears for the surprise popping up?
// </p>
// <div class="jspsych-html-slider-response-container" style="position:relative; float: left; width: 80%;">
//     <div style="margin: 1.5em 0;">
//         <div style="width: 20%; float: left; text-align: center; display: flex; align-items: center; justify-content: center;">
//             <img src="gears/trial_8/A.png" alt="Gear A" style="width: 60px; height: 60px; margin-top: -5px;">
//         </div>
//         <div style="width: 70%; float: right;">
//             <div style="width: 100%;" class="jspsych-html-slider-response-response" id="slider-skyler"> </div>
//             <div style="display: inline-block; position: relative; left: -50%; text-align: center; width: 100%;">
//                 <span style="text-align: center; font-size: 80%;"> not at all </span>
//             </div>
//             <div style="display: inline-block; position: absolute; left: 50%; text-align: center; width: 100%;">
//                 <span style="text-align: center; font-size: 80%;"> very much </span>
//             </div>
//         </div>
//         <div style="clear:both"></div>
//     </div>
//     <div style="margin: 2em 0;">
//     <div style="width: 20%; float: left; text-align: center; display: flex; align-items: center; justify-content: center;">
//         <img src="gears/trial_8/B.png" alt="Gear B" style="width: 60px; height: 60px; margin-top: -5px;">
//     </div>
//     <div style="width: 70%; float: right;">
//         <div style="width: 100%;" class="jspsych-html-slider-response-response" id="slider-skyler"> </div>
//         <div style="display: inline-block; position: relative; left: -50%; text-align: center; width: 100%;">
//             <span style="text-align: center; font-size: 80%;"> not at all </span>
//         </div>
//         <div style="display: inline-block; position: absolute; left: 50%; text-align: center; width: 100%;">
//             <span style="text-align: center; font-size: 80%;"> very much </span>
//         </div>
//     </div>
//     <div style="clear:both"></div>
// </div>
//     <div style="margin: 2em 0;">
//         <div style="width: 20%; float: left; text-align: center; display: flex; align-items: center; justify-content: center;">
//             <img src="gears/trial_8/E.png" alt="Gear E" style="width: 60px; height: 60px; margin-top: -5px;">
//         </div>
//         <div style="width: 70%; float: right;">
//             <div style="width: 100%;" class="jspsych-html-slider-response-response" id="slider-skyler"> </div>
//             <div style="display: inline-block; position: relative; left: -50%; text-align: center; width: 100%;">
//                 <span style="text-align: center; font-size: 80%;"> not at all </span>
//             </div>
//             <div style="display: inline-block; position: absolute; left: 50%; text-align: center; width: 100%;">
//                 <span style="text-align: center; font-size: 80%;"> very much </span>
//             </div>
//         </div>
//         <div style="clear:both"></div>
//     </div>
// </div>
// <img src onerror='set_slider()'>
// `;

// const page9 = format_image_with_text('instructions/page_9.png', page9_text);

const page10_text = `
<p>
    In this experiment, you will now see more toy boxes like these.
    We'll only show you toy boxes where a surprise successfully popped up, and we're interested 
    in seeing how responsible you think certain gears are for making each mechanism work.
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
    // page9,
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
    // 'instructions/page_9.png',
];

const start_prompt = `
<div style="min-height: 200px; max-width: 800px;">
    <p>Correct!</p>
    <p>
        You will now see more toy boxes like these. We're interested 
        in seeing how responsible you think certain gears are for making each mechanism work.
    </p>
    <p>
        Please do not refresh the page.
        Click the "Start" button whenever you're ready.
    </p>
</div>`;

