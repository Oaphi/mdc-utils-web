/**
 * @summary builds MDC TextButton (Ripple)
 * @param {{
 *  iconAfter : string,
 *  onClick : function (MouseEvent, MDCRipple) : void,
 *  parent : (HTMLElement|HTMLBodyElement),
 *  text : string
 * }} 
 */
const createTextButton = ({ 
    iconAfter,
    parent = document.body, 
    text, 
    onClick
}) => {

    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("mdc-button", "mdc-button--outlined");

    const rpl = document.createElement("div");
    rpl.classList.add("mdc-button__ripple");

    const spn = document.createElement("span");
    spn.classList.add("mdc-button__label");
    spn.textContent = text;

    btn.append(rpl, spn);

    if (iconAfter) {
        const lbl = document.createElement("i");
        lbl.classList.add("material-icons", "mdc-button__icon");
        lbl.setAttribute("aria-hidden", true);
        lbl.textContent = iconAfter;
        btn.append(lbl);
    }

    parent.append(btn);

    const initialized = new MDCRipple(btn);

    btn.addEventListener("click", (event) => onClick(event, initialized));

    return initialized;
};

export {
    createTextButton
};