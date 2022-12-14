function createBlock(parentClass, type, item, parent, targetColor) {
  let block = document.createElement("div");

  block.classList.add(`${parentClass}__block`);
  let info;
  if (parentClass == "stores") {
    block.setAttribute("data-id", item.id);

    info = document.createElement("div");
    info.classList.add(`${parentClass}__info`);
    block.append(info);

    let icon = document.createElement("div");
    icon.classList.add(`${parentClass}__icon`);
    icon.classList.add(targetColor);
    info.append(icon);

    let letter = document.createElement("span");
    letter.classList.add(`${parentClass}__letter`);
    letter.textContent = item.name[0];
    icon.append(letter);
  }

  let details = document.createElement("div");

  if (parentClass == "stores") {
    details.classList.add(`${parentClass}__details`);
    info.append(details);

    let name = document.createElement("div");
    name.textContent = item.name;
    name.classList.add(`${parentClass}__name`);

    details.append(name);
  } else {
    details.classList.add(`${parentClass}__text`);
    block.append(details);

    if (type == "coupon") {
      let title = document.createElement("div");
      title.classList.add(`${parentClass}__caption`);
      title.textContent = item.title;
      details.append(title);
    }

    let name = document.createElement("div");
    name.textContent = item.content || "-";

    name.classList.add(`${parentClass}__name`);
    details.append(name);
  }

  if (parentClass == "stores") {
    let count = document.createElement("div");
    count.classList.add(`${parentClass}__count`);

    count.textContent = `${item.campaign_count} campaign(s)`;
    details.append(count);

    let couponCount = document.createElement("div");
    couponCount.classList.add(`${parentClass}__count`);

    couponCount.textContent = `${item.coupon_count} coupon(s)`;
    details.append(couponCount);
  }

  if (item.code) {
    let coupon = document.createElement("button");

    coupon.setAttribute("class", `${parentClass}__coupon coupon`);
    block.append(coupon);

    let svg = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 488.3 488.3"
      style="enable-background: new 0 0 488.3 488.3"
      xml:space="preserve">
      <g>
        <g>
          <path
            d="M314.25,85.4h-227c-21.3,0-38.6,17.3-38.6,38.6v325.7c0,21.3,17.3,38.6,38.6,38.6h227c21.3,0,38.6-17.3,38.6-38.6V124
  C352.75,102.7,335.45,85.4,314.25,85.4z M325.75,449.6c0,6.4-5.2,11.6-11.6,11.6h-227c-6.4,0-11.6-5.2-11.6-11.6V124
  c0-6.4,5.2-11.6,11.6-11.6h227c6.4,0,11.6,5.2,11.6,11.6V449.6z" />
          <path
            d="M401.05,0h-227c-21.3,0-38.6,17.3-38.6,38.6c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5c0-6.4,5.2-11.6,11.6-11.6h227
  c6.4,0,11.6,5.2,11.6,11.6v325.7c0,6.4-5.2,11.6-11.6,11.6c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5c21.3,0,38.6-17.3,38.6-38.6
  V38.6C439.65,17.3,422.35,0,401.05,0z" />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>`;

    coupon.insertAdjacentHTML("afterbegin", svg);

    let code = document.createElement("span");

    code.classList.add("code");
    code.textContent = item.code;
    coupon.append(code);
  }

  if (!item.code && parentClass != "stores") {
    let buttonMore = document.createElement("a");
    buttonMore.classList.add("details__more");
    buttonMore.textContent = "Learn more";
    buttonMore.href = item.affurl;
    buttonMore.target = "_blank";
    block.append(buttonMore);
  }

  parent.append(block);
}
