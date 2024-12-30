import { database } from "./aquariumData.js";

const tips = database.tips;

export const tipList = () => {
    let tipsHTML = '<ul class="tips">';

    for (const tip of tips) {
        tipsHTML += `
            <li class="tip">
                <strong>${tip.topic}:</strong> ${tip.text}
            </li>
        `
    }

    tipsHTML += '</ul>';
    
    return tipsHTML;
}