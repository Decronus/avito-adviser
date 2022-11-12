const mainFunc = () => {
  let minValueIndex = 0;
  const minValue = (array) => {
    let minimum;
    for (let el of array) {
      if (el !== 0) {
        minimum = el;
        break;
      }
    }
    for (let el of array) {
      if (el === 0) continue;
      if (el <= minimum) {
        minimum = el;
        minValueIndex = array.indexOf(el);
      }
    }
    return minimum;
  };

  let maxValueIndex = 0;
  const maxValue = (array) => {
    let maximum = array[0];
    for (let el of array) {
      if (typeof el !== "number") {
        continue;
      }
      if (el >= maximum) {
        maximum = el;
        maxValueIndex = array.indexOf(el);
      }
    }
    return maximum;
  };

  const averageValue = (array) => {
    let sum = 0;
    let notNumber = 0;
    for (let el of array) {
      if (String(el) === "NaN") {
        notNumber += 1;
        continue;
      }
      sum += el;
    }
    const average = Math.floor(sum / (array.length - notNumber));
    return average;
  };

  let sortedPricesArray;
  const medianValue = (array) => {
    console.log("array", array);
    sortedPricesArray = array.sort((a, b) => a - b);
    for (let el of sortedPricesArray) {
      if (String(el) === "NaN") {
        array.pop(el);
      }
    }

    let median = 0;
    if (sortedPricesArray.length % 2 === 0) {
      median =
        sortedPricesArray[sortedPricesArray.length / 2 - 1] / 2 +
        sortedPricesArray[sortedPricesArray.length / 2] / 2;
    } else {
      median = sortedPricesArray[(sortedPricesArray.length - 1) / 2 - 1];
    }

    console.log(median);
    return median;
  };

  const main = document.querySelector(".index-content-_KxNP");

  const heading = document.createElement("h1");
  heading.textContent = "Заголовок";

  const pluginWrap = document.createElement("div");
  pluginWrap.style.maxWidth = "980px";
  pluginWrap.style.minheight = "112px";
  pluginWrap.style.background = "#4CA7F8";
  pluginWrap.style.marginBottom = "20px";
  pluginWrap.style.color = "white";
  pluginWrap.style.display = "flex";
  pluginWrap.style.flexDirection = "column";
  pluginWrap.style.alignItems = "center";
  pluginWrap.style.justifyContent = "space-between";
  pluginWrap.style.gap = "12px";
  pluginWrap.style.padding = "18px 20px 18px 20px";

  const queryTextContent = document
    .querySelector(".page-title-text-tSffu")
    .textContent.toUpperCase();

  const pluginHeader = document.createElement("h1");
  pluginHeader.style.fontSize = "16px";
  pluginHeader.style.textAlign = "center";
  pluginHeader.textContent = queryTextContent;

  const cards = document.querySelectorAll(".iva-item-root-_lk9K");

  const pricesArray = [];
  const linksArray = [];
  cards.forEach((el) => {
    priceElement = el.querySelector(".price-text-_YGDY");
    let price = Number(priceElement.textContent.replace(/[^0-9]/g, ""));
    pricesArray.push(price);

    linkElement = el.querySelector(".link-link-MbQDP");
    const link = linkElement.getAttribute("href");
    linksArray.push(link);
  });

  const pricesMainWrap = document.createElement("div");
  pricesMainWrap.style.display = "flex";
  pricesMainWrap.style.gap = "10px";

  const minPriceMainWrap = document.createElement("div");
  minPriceMainWrap.style.display = "flex";
  minPriceMainWrap.style.flexDirection = "column";
  minPriceMainWrap.style.alignItems = "center";
  minPriceMainWrap.style.gap = "10px";

  const minPriceContainer = document.createElement("div");
  minPriceContainer.style.boxSizing = "border-box";
  minPriceContainer.style.minWidth = "122px";
  minPriceContainer.style.height = "58px";
  minPriceContainer.style.borderRadius = "10px";
  minPriceContainer.style.background = "white";
  minPriceContainer.style.color = "black";
  minPriceContainer.style.display = "flex";
  minPriceContainer.style.flexDirection = "column";
  minPriceContainer.style.alignItems = "center";
  minPriceContainer.style.justifyContent = "center";
  minPriceContainer.style.padding = "24px 20px 12px 20px";

  const minPrice = document.createElement("h3");
  minPrice.style.color = "#62965E";
  minPrice.style.fontSize = "24px";
  minPrice.style.fontWeight = "bold";
  minPrice.style.lineHeight = "0";
  minPrice.textContent = minValue(pricesArray) + " ₽";

  const description = document.createElement("p");
  description.style.fontSize = "14px";
  description.style.letterSpacing = "1px";
  description.textContent = "MIN цена";

  //   const minPriceLink = document.createElement("a");
  //   minPriceLink.textContent = "Ссылка на товар";
  //   minPriceLink.style.color = "white";
  //   minPriceLink.style.fontSize = "14px";
  //   minPriceLink.setAttribute("href", linksArray[minValueIndex]);

  pluginWrap.append(pluginHeader);
  pluginWrap.append(pricesMainWrap);

  pricesMainWrap.append(minPriceMainWrap);
  minPriceMainWrap.append(minPriceContainer);
  //   minPriceMainWrap.append(minPriceLink);
  minPriceContainer.append(minPrice);
  minPriceContainer.append(description);

  //Блок медианной цены
  const averagePriceMainWrap = minPriceMainWrap.cloneNode(true);
  const averageDescription = averagePriceMainWrap.getElementsByTagName("p");
  averageDescription[0].textContent = "Медианная цена";
  const averagePrice = averagePriceMainWrap.getElementsByTagName("h3");
  averagePrice[0].textContent = medianValue(pricesArray) + " ₽";
  averagePrice[0].style.color = "#A5992E";
  const averageLink = averagePriceMainWrap.getElementsByTagName("a");
  //   averageLink[0].remove();
  pricesMainWrap.append(averagePriceMainWrap);

  //Блок максимальной цены
  const maxPriceMainWrap = minPriceMainWrap.cloneNode(true);
  const maxDescription = maxPriceMainWrap.getElementsByTagName("p");
  maxDescription[0].textContent = "MAX цена";
  const maxPrice = maxPriceMainWrap.getElementsByTagName("h3");
  maxPrice[0].style.color = "#AE5454";
  maxPrice[0].textContent = maxValue(pricesArray) + " ₽";
  //   const maxLink = maxPriceMainWrap.getElementsByTagName("a");
  //   maxLink[0].setAttribute("href", linksArray[maxValueIndex]);
  pricesMainWrap.append(maxPriceMainWrap);

  const info = document.createElement("p");
  info.style.fontSize = "10px";
  info.style.opacity = 0.65;
  info.textContent = `Информация на основе анализа ${sortedPricesArray.length} объявлений на этой странице`;
  pluginWrap.append(info);

  main.prepend(pluginWrap);
};

setTimeout(() => {
  mainFunc();
}, 600);
