// Initializing variable to the ul element in the html
const navBarList = document.getElementById('navbar__list');
// making an array carrying all buttons in the navBar
let buttons = [];
let sectionsData = [];

// adding Section function
function addSection(sectionName) {
    // Creating a brand new section
    const sectionEl = document.createElement('section');
    // Setting the section Attr 'data-nav' to be found in the navBar
    sectionEl.setAttribute('data-nav', sectionName);
    // Changing the innerHTML to match the default format
    sectionEl.innerHTML = ` <div class="landing__container">
    <h2>${sectionName}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      fermentum metus faucibus lectus pharetra dapibus. Suspendisse
      potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
      lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
      convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
      eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
      nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
      lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
      tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
      vitae elit. Integer nec libero venenatis libero ultricies molestie
      semper in tellus. Sed congue et odio sed euismod.
    </p>

    <p>
      Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
      gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
      Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
      consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
      elementum tortor mollis non.
    </p>
  </div>`;
    // Getting the whole carrying sections thing
    const container = document.querySelector('main');
    // Appending the sections to it
    container.appendChild(sectionEl);
    // Calling the updateNavBar function to add the newly added section
    updateNavBar();
};

// Updating the navBar to include all new and currently added sections
function updateNavBar() {
    navBarList.innerHTML = "";
    buttons = [];
    sectionsData = [];
    // Getting sections into array List
    let sections = document.getElementsByTagName('section');
    // Initializing variable to the ul element in the html
    for (let section of sections) {
        // Creating buttons to append in the ul element in the html
        const li = document.createElement('li');
        const item = document.createElement('button');
        // Editing the button text
        item.textContent = section.getAttribute('data-nav');
        sectionsData.push(section);
        buttons.push(item);
        // Appending the button to the ul element in the html
        li.appendChild(item);
        navBarList.appendChild(li);
    };
};
// Making a button to be highlighted
function changeColorOfButton(inputButton) {
    for (let button of buttons) {
        if (button === inputButton) {
            button.style.color = "blue";
        } else {
            button.style.color = "black";
        }
    }
};
// Adding active to the class of the viewed section
function putInActiveState(sections, inputSection) {
    for (let section of sections) {
        if (section == inputSection) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
};

// reference :: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
// Whole doc is read and understood well
// No code copying was done
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    if (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
        return true;
    } else {
        return false;
    }
};


// For Loop to add sections as many as needed 
// In this example I only added 1 more setion using 5 < 6 the only loop to enter
// Change the 6 to any other number to add more sections
for (let index = 5; index < 6; index++) {
    addSection(`Section ${index}`);
}


////*****  EVENTS  *****////

// Adding just ONE single event in the navBar instead of adding to all buttons ~event delegation~
navBarList.addEventListener("click", function (event) {
    // Checking if the clicked element is button
    if (event.target.type === "submit") {
        // looping through all sections to get the needed section
        for (const assocSection of sectionsData) {
            // After finding the needed Section we scroll into it and put it in the active state
            if (event.target.innerHTML == assocSection.getAttribute('data-nav')) {
                assocSection.scrollIntoView(true);
                putInActiveState(sectionsData, assocSection);
            }
        }
    }
});


// Adding scrolling event to take care of the scrolling to items without clicking buttons
document.addEventListener("scroll", function () {
    // looping through sections
    for (let section of sectionsData) {
        // Checking which section is in the view
        if (isInViewport(section)) {
            // After finding which section is on the view we put it in the active state
            // and change its associated button to be focused.
            putInActiveState(sectionsData, section);
            for (let button of buttons) {
                if (button.textContent == section.getAttribute('data-nav')) {
                    changeColorOfButton(button);
                }
                if (section.getAttribute('data-nav') === "Section 5") {
                    document.getElementById('myBtn').style.display = "Block";
                } else {
                    document.getElementById('myBtn').style.display = "none";
                }
            }
        }
    }
});
document.getElementById('myBtn').addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});